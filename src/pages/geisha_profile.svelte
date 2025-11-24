<style>
    .div_container_cls {
        padding: 8px;
        display: flex;
    }
    .div_container_left_cls {
        width: 810px; 
        min-width: 810px; 
        margin-right: 8px;
    }
    .ag-theme-balham {
        height: calc(100vh - 392px);
        min-height: 485px;
        width: 100%;
    }

    /* 항목 입력 테이블 */
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
        height: 26px;
        padding: 6px;
    }
    .th_necessary_cls {
        background-color: #ffd384;
    }

    /* 프린트 미리보기 */
    .div_print_cls {
        border: 1px solid;
        width: 560px;
        min-width: 560px;
        height: 795px;
        min-height: 795px;
        padding: 24px 16px;
        box-sizing: border-box; 
        background: #040000;
        color: #fcf4e5;
        font-family: 'HappinessSans', sans-serif;
    }
    .div_print_content_cls {
        display: flex; 
        margin: 40px 14px;
    }
    .div_print_content_left_cls {
        width: 50%;
    }
    .div_print_content_right_cls {
        width: 50%;
    }

    /* 프린트 미리보기 (헤드) */
    .div_print_head_cls {
        position: relative;
        display: flex;
        align-items: center; 
        justify-content: space-between;
    }
    .div_print_head_img_cls {
        width: 526px;
        height: 305px;
    }
    .div_print_head_img_cls img {
        width: 100%;
    }

    /* 프린트 미리보기 (좌/우측) */
    .div_print_content_hr_cls {
        border-bottom: 0.5px solid #fcf4e5;
        opacity: 70%;
    }
    .div_print_content_eng_name_cls {
        display: flex;
        align-items: center;
        white-space: pre-line;
        height: 58px;
        margin-top: 16px;
        font-size: 11px;
        line-height: 1.2;
    }
    .div_print_content_kor_name_cls {
        display: flex;
        align-items: end;
        white-space: pre-line;
        font-size: 9px;
        height: 26px;
        line-height: 1.3;
    }
    .div_print_content_head_cls {
        display: flex; 
        align-items: center;
        font-size: 15px; 
        margin: 31px 0 13.5px 0;
    }
    .hr_print_content_head_cls {
        width: 10px;
        height: 0.5px;
        border: none;
        background-color: #fcf4e5;
        margin: 0 10px 0 0;
        opacity: 50%;
    }
    .div_print_content_eng_note_cls {
        font-size: 10px;
        margin-bottom: 8px;
        white-space: pre-line;
        line-height: 1.5;
    }
    .div_print_content_kor_note_cls {
        font-size: 9.6px;
        opacity: 70%;
    }
    .div_print_good_for_cls {
        display: flex;
        margin-top: 2px; 
        font-size: 10px;
        line-height: 1.6;
    }
    .div_print_good_for_head_cls {
        width: 44px;
    }
    .div_print_good_for_dot_cls {
        margin-right: 6px;
    }
    .div_print_name_cls {
        display: flex; 
        align-items: center; 
        width: 210px; 
        font-size: 13px;
    }
    .span_print_name_cls {
        color: #fcf4e5; 
        margin-left: 12px;
    }

    /* 프린트 출력하기 버튼 */
    .btn_print_cls {
        width: 100%; 
        height: 38px; 
        margin-top: 8px; 
        font-size: 18px;
    }
</style>

<div class="div_container_cls">
    <div class="div_container_left_cls">
        <div class="div_header" style="display: flex; align-items: center; justify-content: space-between;">
            <div>게이샤 프로파일 출력</div>
            <button on:click={init_profile_input} class="btn btn_red">초기화</button>
        </div>
        <table class="table table_bordered" style="margin-bottom: 8px;">
            <colgroup>
                <col style="width: 10%;">
                <col style="width: 20%;">
                <col style="width: 10%;">
                <col style="width: 20%;">
                <col style="width: 10%;">
                <col style="width: 30%;">
            </colgroup>
            <tbody>
            <tr>
                <th class="th_necessary_cls">고객명</th>
                <td><input class="input_style" bind:value={ref_profile_obj.cust_name}></td>
                <th class="th_necessary_cls">날짜</th>
                <td><input type="date" class="input_style" bind:value={ref_profile_obj.date}></td>
                <th></th>
                <td></td>
            </tr>
            <tr>
                <th></th>
                <td colspan="3"></td>
                <th></th>
                <td></td>
            </tr>
            <tr>
                <th>물 온도</th>
                <td><input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.water_temperature}>°C</td>
                <th>추출 방법</th>
                <td>
                    <select bind:value={ref_profile_obj.grind_recommend} class="select_style">
                        <option value="홀빈">홀빈</option>
                        <option value="에스프레소">에스프레소</option>
                        <option value="핸드드립">핸드드립</option>
                        <option value="콜드브루">콜드브루</option>
                        <option value="모카포트">모카포트</option>
                    </select>
                </td>
                <th>원두 중량</th>
                <td><input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.bean_weight}>g</td>
            </tr>
            <tr>
                <th>뜸 들이기</th>
                <td colspan="3">
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.steam_water}>ml (물 
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.steam_second}>ml)
                    <input class="input_style" bind:value={ref_profile_obj.steam_method} style="width: 182px;">
                </td>
                <th>물의 양</th>
                <td><input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.water_weight}>ml</td>               
            </tr>
            <tr>
                <th>추출 시간</th>
                <td colspan="3">
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_start_minute}>분
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_start_second} style="margin-left: 4px;">초&nbsp;&nbsp;~ 
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_end_minute} style="margin-left: 4px;">분 
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.brew_end_second} style="margin-left: 4px;">초
                </td>
                <th>추출 도구</th>
                <td><input class="input_style" bind:value={ref_profile_obj.brew_method}></td>
            </tr>
            </tbody>
        </table>
        <div bind:this={ref_this_grid} class="ag-theme-balham"></div>
    </div>
    <div class="div_container_right_cls">
        <div class="div_print_cls">
            <div class="div_print_head_cls">
                <div class="div_print_head_img_cls">
                    <img src={`/assets/images/geisha/${ref_geisha_obj.IMG_NAME}.png`} alt="">
                </div>
            </div>

            <div class="div_print_content_cls">
                <div class="div_print_content_left_cls">
                    <div class="div_print_content_hr_cls"></div>
                    <div style="margin: 24px 0 12px; font-size: 14px;">Black Archive NO.{ref_geisha_obj.NO}</div>
                    <img src="/assets/images/logo_white.svg" alt="" style="width: 168px;">
                    <div class="div_print_content_eng_name_cls">{ref_geisha_obj.ENG_PRODUCT_NAME}</div>
                    <div class="div_print_content_kor_name_cls">{ref_geisha_obj.KOR_PRODUCT_NAME}</div>
                    <div class="div_print_content_hr_cls" style="margin:22px 0 24px 0;"></div>
                    <div class="div_print_name_cls">
                        <i>DEAR : <span class="span_print_name_cls">{ref_profile_obj.cust_name}</span></i>
                    </div>
                    <div class="div_print_name_cls" style="padding-top: 18px;">
                        <i>Roasting Date : <span class="span_print_name_cls">{dayjs(ref_profile_obj.date).format("YYYY.MM.DD")}</span></i>
                    </div>
                    <div class="div_print_content_hr_cls" style="margin: 26px 0 20px 0;"></div>
                    <div class="div_print_content_head_cls" style="margin: 0 0 14px 0;">
                        <hr class="hr_print_content_head_cls"><i>Note</i>
                    </div>
                    <div class="div_print_content_eng_note_cls">{ref_geisha_obj.ENG_NOTE}</div>
                    <div class="div_print_content_kor_note_cls">{ref_geisha_obj.KOR_NOTE}</div>
                </div>

                <div style="border-right: 0.5px solid #fcf4e5; height: 404px; margin: 0 28px; opacity: 70%;"></div>

                <div class="div_print_content_right_cls">
                    <div class="div_print_content_head_cls" style="margin-top: 14px;">
                        <hr class="hr_print_content_head_cls"><i>Information</i>
                    </div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">재배고도</div><div class="div_print_good_for_dot_cls">•</div>{ref_geisha_obj.ALTITUDE}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">생산지</div><div class="div_print_good_for_dot_cls">•</div>{ref_geisha_obj.ORIGIN_REGION}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">품종</div><div class="div_print_good_for_dot_cls">•</div>{ref_geisha_obj.VARIETY}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">가공법</div><div class="div_print_good_for_dot_cls">•</div>{ref_geisha_obj.PROCESS}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">로스팅</div><div class="div_print_good_for_dot_cls">•</div>{ref_geisha_obj.ROASTING}</div>
                    <div class="div_print_content_head_cls">
                        <hr class="hr_print_content_head_cls"><i>Good For</i>
                    </div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">추출도구</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.brew_method}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">물 온도</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.water_temperature}°C</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">추출방법</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.grind_recommend}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">원두중량</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.bean_weight}g</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">뜸 들이기</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.steam_water}ml (물 {ref_profile_obj.steam_second}ml)<br>{ref_profile_obj.steam_method}</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">물의 양</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.water_weight}ml</div>
                    <div class="div_print_good_for_cls"><div class="div_print_good_for_head_cls">추출시간</div><div class="div_print_good_for_dot_cls">•</div>{ref_profile_obj.brew_start_minute}분 {ref_profile_obj.brew_start_second}초 ~ {ref_profile_obj.brew_end_minute}분 {ref_profile_obj.brew_end_second}초</div>
                    <div class="div_print_name_cls" style="margin-top: 44px; border-bottom: 0.5px solid #fcf4e5b3; padding-bottom: 12px; font-size: 12px;">
                        <i>From Roaster : </i>
                    </div>
                </div>
                
            </div>
        </div>
        <button on:click={on_click_print} class="btn btn_orange btn_print_cls">출 력 하 기</button>
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

    let ref_profile_obj = {
        cust_name: "",
        date: dayjs().format("YYYY-MM-DD"),
        brew_method: "HARIO v60",
        water_temperature: "91",
        grind_recommend: "핸드드립",
        bean_weight: "20",
        water_weight: "250",
        steam_water: "40",
        steam_second: "40",
        steam_method: "첫 푸어링과 동시에 타이머 시작",
        brew_start_minute: "2",
        brew_start_second: "30",
        brew_end_minute: "2",
        brew_end_second: "50",
    };

    let ref_geisha_obj = {
        NO: "",
        PRODUCT_NO : "",
        ENG_PRODUCT_NAME : "",
        KOR_PRODUCT_NAME : "",
        ENG_NOTE : "",
        KOR_NOTE : "",
        ALTITUDE : "",
        ORIGIN_REGION : "",
        VARIETY : "",
        PROCESS : "",
        ROASTING : "",
        IMG_NAME : "geisha_1",
    };

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
        const spreadsheet_id = "19ihBTMF-2UtvTTlA9v_pfcANQU_iZeqwoev57zwWtuw";  // 여기에 스프레드시트 ID 입력
        const sheet_name = "no_edit";  // 사용 중인 시트 이름으로 변경
        const api_key = "AIzaSyDoCUV43uDId92XUWiMZ73ABPFR8V-AGmk";  // Google Sheets API 키 입력
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${sheet_name}!A2:L4?key=${api_key}`;

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
                NO: parseInt(row[0]) || 0,
                PRODUCT_NO: row[1] || "",
                ENG_PRODUCT_NAME: row[2] || "",
                KOR_PRODUCT_NAME: row[3] || "",
                ENG_NOTE: row[4] || "",
                KOR_NOTE: row[5] || "",
                ALTITUDE: row[6] || "",
                ORIGIN_REGION: row[7] || "",
                VARIETY: row[8] || "",
                PROCESS: row[9] || "",
                ROASTING: row[10] || "",
                IMG_NAME: row[11] || ""
            }));

            grid_options.api.setRowData(formatted_data); // ag-grid에 데이터 적용
            grid_options.api.sizeColumnsToFit();
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
            brew_method: "HARIO v60",
            water_temperature: "91",
            grind_recommend: "핸드드립",
            bean_weight: "20",
            water_weight: "250",
            steam_water: "40",
            steam_second: "40",
            steam_method: "첫 푸어링과 동시에 타이머 시작",
            brew_start_minute: "2",
            brew_start_second: "30",
            brew_end_minute: "2",
            brew_end_second: "50",
        }
        ref_geisha_obj = {
            NO : "",
            PRODUCT_NO : "",
            ENG_PRODUCT_NAME : "",
            KOR_PRODUCT_NAME : "",
            ENG_NOTE : "",
            KOR_NOTE : "",
            ALTITUDE : "",
            ORIGIN_REGION : "",
            VARIETY : "",
            PROCESS : "",
            ROASTING : "",
            IMG_NAME : "geisha_1",
        };
        grid_options.api.deselectAll();
    }

    /** 출력하기 */
    function on_click_print() {
        if (Object.values(ref_profile_obj).some(value => g_nvl2(value,"") === "")) {
            return alert("빈 항목을 입력해주세요.");
        }
        if (g_nvl2(ref_geisha_obj.PRODUCT_NO, "") == "") {
            return alert("원두 행을 선택해주세요.");
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
        const column_defs = [
            { 
                headerName: "No", 
                field: "NO",
                width: 60
            },
            { 
                headerName: "상품번호", 
                field: "PRODUCT_NO"
            },
            { 
                headerName: "영문상품명", 
                field: "ENG_PRODUCT_NAME"
            },
            { 
                headerName: "한글상품명", 
                field: "KOR_PRODUCT_NAME"
            },
            { 
                headerName: "영문노트", 
                field: "ENG_NOTE"
            },
            { 
                headerName: "한글노트", 
                field: "KOR_NOTE"
            },
            { 
                headerName: "재배고도", 
                field: "ALTITUDE"
            },
            { 
                headerName: "생산지", 
                field: "ORIGIN_REGION"
            },
            { 
                headerName: "품종", 
                field: "VARIETY"
            },
            { 
                headerName: "가공법", 
                field: "PROCESS"
            },
            { 
                headerName: "로스팅", 
                field: "ROASTING",
            },
            { 
                headerName: "이미지", 
                field: "IMG_NAME",
            },
        ];

        grid_options = {
            columnDefs: column_defs,
            animateRows: true,
            rowSelection: "single",
            suppressAggFuncInHeader: true,
            suppressRowClickSelection: false,
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
                suppressMovable: true
            },
            onRowClicked: function(params) {
                console.log("params", params);
                for(const key in ref_geisha_obj){
                    ref_geisha_obj[key] = params.data[key];
                }
                ref_geisha_obj = ref_geisha_obj;
            },
            suppressPaste: true,
            overlayLoadingTemplate: "<div class='grid_loading'></div>",
            overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>",
        };

        new Grid(ref_this_grid, grid_options);
        grid_options.api.setRowData([]);
    }
</script>
