<style>
    .div_container_cls {
        padding: 8px;
        display: flex;
    }
    .ag-theme-balham {
        height: calc(100vh - 200px);
        min-height: 200px;
        width: 100%;
    }
    .div_print_cls {
        width: 560px;
        min-width: 560px;
        height: 795px;
        min-height: 795px;
        padding: 43px 34px;
        box-sizing: border-box; 
        background-color: #f8eed4;   
        color: #2c622e;
        font-family: 'HappinessSans', sans-serif;
    }
    .div_print_cls div {
        /* border: 1px solid #ddd; */
    }
    .input_half_style {
        width: 56px;
        margin-right: 4px;
        text-align: end;
    }
    .input_style {
        height: 26px;
        padding: 6px 8px;
    }
    .label_radio_box {
        margin-left: 0;
    }
    table td {
        padding: 6px;
    }
</style>

<div class="div_container_cls">
    <div style="min-width: 820px; margin-right: 8px;">
        <div class="div_header" style="display: flex; align-items: center; justify-content: space-between;">
            <div>프로파일 출력</div>
            <button on:click={init_profile_input} class="btn btn_red">초기화</button>
        </div>
        <table class="table table_bordered" style="margin-bottom: 8px;">
            <colgroup>
                <col style="width: 10%;">
                <col style="width: 21%;">
                <col style="width: 10%;">
                <col style="width: 19%;">
                <col style="width: 10%;">
                <col style="width: 30%;">
            </colgroup>
            <tbody>
            <tr>
                <th>고객ㅇㅇㅇ명</th>
                <td><input class="input_style" bind:value={ref_profile_obj.cust_name}></td>
                <th>날짜</th>
                <td><input type="date" class="input_style" bind:value={ref_profile_obj.date}></td>
                <th>로스팅</th>
                <td>
                    <div style="display: flex;">
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="산뜻한">산뜻한
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="풍미있는">풍미있는
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="향미있는">향미있는
                        </label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>물 온도</th>
                <td>
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.water_temperature_start}>&nbsp;~&nbsp
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.water_temperature_end}>°C
                </td>
                <th>물 중량</th>
                <td><input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.water_weight} style="width: 110px;">g</td>
                <th>물 종류</th>
                <td>
                    <div style="display: flex;">
                        <label class="label_radio_box">
                            <input type="radio" name="water_type" bind:group={ref_profile_obj.water_type} value="삼다수">삼다수
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="water_type" bind:group={ref_profile_obj.water_type} value="아이시스">아이시스
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="water_type" bind:group={ref_profile_obj.water_type} value="식수">식수
                        </label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>총 추출시간</th>
                <td colspan="3">
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_start_minute}>분
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_start_second} style="margin-left: 4px;">초&nbsp;&nbsp;~ 
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_end_minute} style="margin-left: 4px;">분 
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_end_second} style="margin-left: 4px;">초
                </td>
                <th></th>
                <td></td>
            </tr>
            </tbody>
        </table>
        <div bind:this={ref_this_grid} class="ag-theme-balham"></div>
    </div>
    <div class="div_print_cls">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 33px; margin-right: 20px;">BREWME</div>
            <div style="font-size: 10px; line-height: 1.2;">
                <b>Brewing</b> is not just about getting hot.
                <b>Brewing</b> is about removing impurities and reaching the essence.
                In the time that slowly brews you, may you discover a better version of yourself.
            </div>
        </div>
        <div style="display: flex; margin: 38px 6px;">
            <div style="font-size: 13px; margin-right: 30px;">
                <div style="display: flex; align-items: center; width: 210px; padding: 0 0 12px 6px; border-bottom: 0.5px solid #2c622e;"><i>Dear.</i></div>
                <div style="display: flex; align-items: center; width: 210px; padding: 18px 0 12px 6px; border-bottom: 0.5px solid #2c622e;"><i>Date.</i></div>
                <div style="margin-top: 52px; font-size: 16px;"><i>- Information</i></div>
            </div>
            <div style="font-size: 8px; line-height: 1.5; margin-top: 15px;">
                끓는다는 것은 단순히 뜨거워지는 일이 아닙니다.<br>
                끓는다는 것은 불순물을 걷어내고 본질에 다가가는 일입니다.<br>
                서서히 끓어오르는 시간 속에서,<br>
                더 나은 당신을 발견할 수 있도록 함께 합니다.<br>
                <b>BREW ME BETTER, 브루미입니다.</b>
            </div>
        </div>
    </div>
</div>

<script>
    import { onMount } from "svelte";
    import { LicenseManager } from "ag-grid-enterprise";
    import { AG_GRID_LICENSE } from "../config/config.js";
    import { Grid } from "ag-grid-community";
    import 'ag-grid-community/styles/ag-grid.css';
    import 'ag-grid-community/styles/ag-theme-balham.css';

    import jsPDF from "jspdf";
    import html2canvas from "html2canvas";

    import dayjs from "dayjs";

    import { g_nvl2 } from "../js/common/brewme_common.js";
    import { grid_button2_renderer_class } from "../js/grid/grid_class.js";

    let ref_profile_obj = {
        cust_name: "",
        date: dayjs().format("YYYY-MM-DD"),
        roasting_type: "",
        water_temperature_start: "92",
        water_temperature_end: "93",
        water_weight: "350",
        water_type: "삼다수",
        brew_start_minute: "2",
        brew_start_second: "25",
        brew_end_minute: "2",
        brew_end_second: "45",
    }

    let ref_this_grid;
    let grid_options;

    onMount(async () => {
        LicenseManager.setLicenseKey(AG_GRID_LICENSE);
        grid_options_init();

        await set_product();    // 구글 스프레드 시트에 있는 상품 목록 가져와서 세팅
        init_profile_input();   // 프로파일 항목 값 초기화
    });

    /** 구글 스프레드 시트에 있는 상품 목록 가져와서 세팅 */
    async function set_product() {
        const spreadsheet_id = "15BV89gJHI-Kr9OvUWquuIi69t-NFrHlL6RqX3TlJIQc";  // 여기에 스프레드시트 ID 입력
        const sheet_name = "no_edit";  // 사용 중인 시트 이름으로 변경
        const api_key = "AIzaSyDoCUV43uDId92XUWiMZ73ABPFR8V-AGmk";  // Google Sheets API 키 입력
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${sheet_name}!A19:N139?key=${api_key}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (!data.values) {
                console.error("스프레드시트 데이터를 불러오지 못했습니다.");
                return;
            }
            console.log("data",data);

            // 가져온 데이터를 ag-grid에 맞게 변환
            const formatted_data = data.values.map((row, index) => ({
                No: parseInt(row[0]) || 0,
                PRODUCT_NO: row[1] || "",
                브라질: parseInt(row[2]) || 0,
                과테말라: parseInt(row[3]) || 0,
                콜롬비아: parseInt(row[4]) || 0,
                에티오피아: parseInt(row[5]) || 0,
                케냐: parseInt(row[6]) || 0,
                맛: row[13] || "",
            }));

            grid_options.api.setRowData(formatted_data); // ag-grid에 데이터 적용
            console.log(`${formatted_data.length}개의 데이터가 그리드에 적용되었습니다.`);
        } catch (error) {
            console.error("데이터 가져오기 실패:", error);
        }
    }

    /** 프로파일에 들어가는 항목 값 초기화 */
    function init_profile_input() {
        ref_profile_obj = {
            cust_name: "",
            date: dayjs().format("YYYY-MM-DD"),
            roasting_type: "",
            water_temperature_start: "92",
            water_temperature_end: "93",
            water_weight: "350",
            water_type: "삼다수",
            brew_start_minute: "2",
            brew_start_second: "25",
            brew_end_minute: "2",
            brew_end_second: "45",
        }
    }

    /** ad-grid 내 출력하기 */
    function on_click_print(data) {
        console.log("data", data);

        if (Object.values(ref_profile_obj).some(value => g_nvl2(value,"") === "")) {
            return alert("빈 항목을 입력해주세요.");
        }

        const print_area = document.querySelector(".div_print_cls"); // 📌 원하는 영역 선택

        html2canvas(print_area, { scale: 2 }).then(canvas => {
            const img_data = canvas.toDataURL("image/png"); // 캡처한 내용을 이미지로 변환
            const doc = new jsPDF({
                orientation: "portrait", // 세로 방향
                unit: "mm",
                format: "a5", // A5 용지 크기
                margin: 0 // 🔥 여백 없음
            });

            const a5_width = 148;  // A5 용지 너비 (mm)
            const a5_height = 210; // A5 용지 높이 (mm)
            
            // 캔버스 크기 기준으로 비율 유지
            const img_ratio = canvas.width / canvas.height;
            let img_width, img_height;

            if (img_ratio > (a5_width / a5_height)) {
                // 이미지가 A5보다 가로로 넓다면 → A5 너비에 맞춤
                img_width = a5_width;
                img_height = img_width / img_ratio;
            } else {
                // 이미지가 A5보다 세로로 길다면 → A5 높이에 맞춤
                img_height = a5_height;
                img_width = img_height * img_ratio;
            }

            // 🔥 중앙 정렬 (X, Y 좌표 계산)
            const center_x = (a5_width - img_width) / 2;
            const center_y = (a5_height - img_height) / 2;

            doc.addImage(img_data, "PNG", center_x, center_y, img_width, img_height); // 중앙 정렬

            // 새 창에서 PDF 미리보기
            const pdf_blob = doc.output("blob");
            const pdf_url = URL.createObjectURL(pdf_blob);
            const new_window = window.open(pdf_url, "_blank", "width=1000, height=900");

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
                width: 60,
            },
            { 
                headerName: "상품번호", 
                field: "PRODUCT_NO",
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
                headerName: "케냐", 
                field: "케냐",
            },
            { 
                headerName: "맛", 
                field: "맛",
                width: 200,
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
