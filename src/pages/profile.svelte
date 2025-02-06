<style>
    .div_container_cls {
        padding: 8px;
    }
    .ag-theme-balham {
        height: calc(100vh - 120px);
        min-height: 200px;
        width: 100%;
    }
</style>

<div class="div_container_cls">
    <div class="div_header">
        고객명 : <input class="input_style" bind:value={ref_cust_name} style="margin-left: 6px; width: 200px;">
    </div>
    <div bind:this={ref_this_grid} class="ag-theme-balham"></div>
</div>

<div class="div_print_cls">
    <div>고객명 : {ref_cust_name}</div>
    <!-- 여기에 마음껏 쓴 내용을  on_click_print 함수에 그대로 넣어서 출력하고싶다. -->
</div>

<script>
    import { onMount } from "svelte";
    import { LicenseManager } from "ag-grid-enterprise";
    import { AG_GRID_LICENSE } from "../config/config.js";
    import { Grid } from "ag-grid-community";
    import 'ag-grid-community/styles/ag-grid.css';
    import 'ag-grid-community/styles/ag-theme-balham.css';
    import { AG_GRID_LOCALE_KO } from "../js/grid/grid_locale.ko.js";
    import { excel_styles } from "../js/grid/grid_excel.js";

    import jsPDF from "jspdf";
    import html2canvas from "html2canvas";
    import { mmgd_font_base64 } from "../../public/assets/font/mmgd/mmgd.js";

    import { g_nvl2 } from "../js/common/brewme_common.js";
    import { grid_button2_renderer_class } from "../js/grid/grid_class.js";

    let ref_cust_name = "";

    let ref_this_grid;
    let grid_options;

    onMount(async () => {
        LicenseManager.setLicenseKey(AG_GRID_LICENSE);
        grid_options_init();

        await custom_list(); // 매입처 리스트 조회
    });

    async function custom_list() {
        const spreadsheet_id = "15BV89gJHI-Kr9OvUWquuIi69t-NFrHlL6RqX3TlJIQc";  // 여기에 스프레드시트 ID 입력
        const sheet_name = "수정 시 자동화 코드 주의!";  // 사용 중인 시트 이름으로 변경
        const api_key = "AIzaSyDoCUV43uDId92XUWiMZ73ABPFR8V-AGmk";  // Google Sheets API 키 입력

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${sheet_name}!A19:G139?key=${api_key}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (!data.values) {
                console.error("스프레드시트 데이터를 불러오지 못했습니다.");
                return;
            }

            // 가져온 데이터를 ag-grid에 맞게 변환
            const formatted_data = data.values.map((row, index) => ({
                No: parseInt(row[0]) || 0,
                PRODUCT_NO: row[1] || "",
                케냐: parseInt(row[2]) || 0,
                브라질: parseInt(row[3]) || 0,
                과테말라: parseInt(row[4]) || 0,
                콜롬비아: parseInt(row[5]) || 0,
                에티오피아: parseInt(row[6]) || 0,
            }));

            grid_options.api.setRowData(formatted_data); // ag-grid에 데이터 적용
            console.log(`${formatted_data.length}개의 데이터가 그리드에 적용되었습니다.`);
        } catch (error) {
            console.error("데이터 가져오기 실패:", error);
        }
    }


    function on_click_print(data) {
        console.log("data", data);
        
        const print_area = document.querySelector(".div_print_cls"); // 📌 원하는 영역 선택

        html2canvas(print_area, { scale: 2 }).then(canvas => {
            const img_data = canvas.toDataURL("image/png"); // 캡처한 내용을 이미지로 변환
            const doc = new jsPDF({
                orientation: "portrait", // 세로 방향
                unit: "mm",
                format: "a5", // A5 용지 크기
            });

            const img_width = 140; // 이미지 너비
            const img_height = (canvas.height * img_width) / canvas.width; // 비율 유지

            doc.addImage(img_data, "PNG", 10, 10, img_width, img_height); // PDF에 이미지 추가

            // 새 창에서 PDF 미리보기
            const pdf_blob = doc.output("blob");
            const pdf_url = URL.createObjectURL(pdf_blob);
            const new_window = window.open(pdf_url, "_blank", "width=1000, height=800");

            if (!new_window) {
                alert("팝업 차단이 되어 있어 새 창을 열 수 없습니다. 팝업 차단을 해제하세요.");
            }
        });
    }

    function grid_options_init() {
        const print_btn_renderer_params = {
            inner_html: `<button class="btn_grid btn_orange_reverse btn_print_cls" style="width:50px;">출력</button>`,
            add_class: `.btn_print_cls`,
            function_name: on_click_print,
        };
        const column_defs = [
            { 
                headerName: "No", 
                field: "No",
            },
            { 
                headerName: "상품번호", 
                field: "PRODUCT_NO",
            },
            { 
                headerName: "케냐", 
                field: "케냐",
            },
            { 
                headerName: "브라질", 
                field: "브라질",
            },
            { 
                headerName: "과테말라", 
                field: "과테말라",
            },
            { 
                headerName: "콜롬비아", 
                field: "콜롬비아",
            },
            { 
                headerName: "에티오피아", 
                field: "에티오피아",
            },
            {
                headerName: "출력",
                field: "PRINT",
                cellClass: ["grid_default_cell_style", "text_center"],
                cellRendererSelector: function(params) {
                    if(typeof params.data != "undefined") {
                        return {
                            component: grid_button2_renderer_class,
                            params: print_btn_renderer_params,
                        };
                    }
                },
            },
        ];

        grid_options = {
            columnDefs: column_defs,
            animateRows: true,
            rowSelection: "single",
            suppressAggFuncInHeader: true,
            suppressRowClickSelection: true,
            groupSelectsChildren: true,
            groupSelectsFiltered: true,
            stopEditingWhenCellsLoseFocus: true,
            enableRangeSelection: true,
            defaultColDef: {
                width: 80,
                cellClass: ["grid_default_cell_style", "string_type"],
                resizable: true,
                sortable: true,
                floatingFilter: true, // 부동 필터를 활성화 하기위한 설정
                filter: "agTextColumnFilter", // 문자열 비교를 위한 필터
                filterParams: {
                    filters: [
                        {
                            filter: "agTextColumnFilter",
                        },
                        {
                            filter: "agSetColumnFilter",
                        },
                    ],
                },
                floatingFilterComponentParams: {
                    suppressFilterButton: true,
                },
            },
            
            suppressPaste: true,
            overlayLoadingTemplate: "<div class='grid_loading'></div>",
            overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>",
        };

        new Grid(ref_this_grid, grid_options);
        grid_options.api.setRowData([]);
    }
</script>
