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
        padding: 44px 30px;
        box-sizing: border-box; 
        background-color: #fdf1df;   
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

    .border {
        border-left: 0.1px dashed #818a5c;
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
                <th>고객명</th>
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
            <div style="margin-right: 22px;">
                <img src="/assets/images/logo.svg" alt="" style="width: 140px;">
            </div>
            <div style="font-size: 10px; line-height: 1.2;">
                <b>Brewing</b> is not just about getting hot.
                <b>Brewing</b> is about removing impurities and reaching the essence.
                In the time that slowly brews you, may you discover a better version of yourself.
            </div>
        </div>
        <div style="display: flex; margin: 37px 6px;">
            <div style="margin-right: 30px;">
                <div style="display: flex; align-items: center; width: 210px; padding: 0 0 12px 6px; border-bottom: 0.5px solid #2c622e; font-size: 13px; ">
                    <i>Dear. <span style="color: #56514b; font-size: 12px; margin-left: 16px;">민세영</span></i>
                </div>
                <div style="display: flex; align-items: center; width: 210px; padding: 18px 0 12px 6px; border-bottom: 0.5px solid #2c622e; font-size: 13px; ">
                    <i>Date. <span style="color: #56514b; font-size: 12px; margin-left: 16px;">2025.03.04</span></i>
                </div>

                <div style="margin-top: 48.5px; font-size: 15px; display: flex; align-items: center;">
                    <hr style="border: none; height: 0.5px; background-color: #2c622e; width: 12px; margin: 0 6px 0 0;"><i>Information</i></div>
                <div style="margin-top: 14px; font-size: 14px; font-weight: 600;">Medium Roasting</div>
                <div style="margin-top: 7px; font-size: 11px;"><span style="font-weight: 600;">분쇄도 : </span>산뜻한 (약배전)</div>
                <div style="margin-top: 13px; font-size: 12.5px; font-weight: 600;">Kenya<span style="font-weight: normal; font-size: 10px; margin: 0 4px;">Natural</span>20%</div>
                <div style="margin-top: 4.5px; font-size: 12.5px; font-weight: 600;">Brazil<span style="font-weight: normal; font-size: 10px; margin: 0 4px;">Natural</span>20%</div>
                <div style="margin-top: 4.5px; font-size: 12.5px; font-weight: 600;">Guatemala<span style="font-weight: normal; font-size: 10px; margin: 0 4px;">Natural</span>20%</div>
                <div style="margin-top: 4.5px; font-size: 12.5px; font-weight: 600;">Colombia<span style="font-weight: normal; font-size: 10px; margin: 0 4px;">Natural</span>20%</div>
                <div style="margin-top: 4.5px; font-size: 12.5px; font-weight: 600;">Ethiopia<span style="font-weight: normal; font-size: 10px; margin: 0 4px;">Natural</span>20%</div>

                <div style="margin-top: 31px; font-size: 15px; display: flex; align-items: center;">
                    <hr style="border: none; height: 0.5px; background-color: #2c622e; width: 12px; margin: 0 6px 0 0;"><i>Note</i></div>
                <div style="margin-top: 13.5px; font-size: 11.5px;">Apricot</div>
                <div style="margin-top: 3.5px; font-size: 11.5px;">Brown Sugar</div>
                <div style="margin-top: 3.5px; font-size: 11.5px;">Barley</div>
                <div style="margin-top: 3.5px; font-size: 11.5px;">Hazelnut</div>

                <div style="margin-top: 31px; font-size: 15px; display: flex; align-items: center;">
                    <hr style="border: none; height: 0.5px; background-color: #2c622e; width: 12px; margin: 0 6px 0 0;"><i>Good For</i></div>
                <div style="margin-top: 13.5px; font-size: 10px;"><b>물 온도</b> : 90°C</div>
                <div style="margin-top: 11px; font-size: 10px;"><b>추출방법</b> : 핸드드립 / <b>원두 중량</b> : 30g</div>
                <div style="margin-top: 11px; font-size: 10px;"><b>뜸 들이기</b> : 50ml 내리고 30 초</div>
                <div style="margin-top: 11px; font-size: 10px;"><b>물의 양</b> : 330ml / <b>추출 시간</b> : 2분 ~ 2분 30초</div>

                <div style="margin-top: 69px; display: flex; align-items: end;">
                    <img src="/assets/images/qrcode/full.svg" alt="" style="width: 52px; height: 52px;">
                    <div style="font-size: 8px; margin: 0 0 4px 20px;">4 Minutes for You</div>
                </div>

                
            </div>
            <div style="margin-top: 15px; width: 100%;">
                <div style="font-size: 8px; line-height: 1.5;">
                    끓는다는 것은 단순히 뜨거워지는 일이 아닙니다.<br>
                    끓는다는 것은 불순물을 걷어내고 본질에 다가가는 일입니다.<br>
                    서서히 끓어오르는 시간 속에서,<br>
                    더 나은 당신을 발견할 수 있도록 함께 합니다.<br>
                    <b>BREW ME BETTER, 브루미입니다.</b>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: end;">
                    <div style="margin-top: 45px; font-size: 15px; font-weight: 600; line-height: 1.15;">
                        BREW<br>ME<br>BETTER
                    </div>
                    <img src="/assets/images/symbol.svg" alt="" style="width: 44px; height: 30px;">
                </div>

                <div style="background-color: #818a5c; color: #fff; margin-top: 18px; padding: 14px 16px;">
                    <div><i>Tasting Notes :</i></div>
                    <div style="margin-top: 10px; font-size: 9px;">DATE:<span style="margin: 0 40px;">.</span>.</div>
                    <div style="margin: 8px 0; font-size: 9px;">이 커피를 추천하는 순간.</div>
                    {#each Array(moment_row_count) as _, moment_row_idx}
                        {#if moment_row_idx === 3}
                            <!-- 위쪽 선 -->
                            <div style="border-top: 0.5px dashed #ccc; width: 94%; margin: 6px auto 0 auto;"></div>
                        {/if}
                        <div style="display: flex; align-items: center; font-size: 7px; margin: 6px 0 0 16px;">
                            {#each moment_arr.slice(moment_row_idx * moment_row_length, moment_row_idx * moment_row_length + moment_row_length) as item}
                            <div style="display: flex; align-items: center; width: 50px;">
                                <div style="width: 8px; height: 8px; border: 0.5px solid #fff; margin-right: 4px;"></div>
                                <div>{item}</div>
                            </div>
                            {/each}
                        </div>
                        {#if moment_row_idx === 3}
                            <!-- 아래쪽 선 -->
                            <div style="border-top: 0.5px dashed #ccc; width: 94%; margin: 6px auto 0 auto;"></div>
                        {/if}
                    {/each}

                    <div style="font-size: 7px; width: 124px; display: flex; justify-content: space-between; margin: 10px 0 0 30px;"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
                            
                    <div style="width: 100%; display: flex; justify-content: space-between; align-items: start;">

                        <div>
                            {#each flavor_arr as label}
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
                                <div style="color: #fff; font-size: 8px; width: 30px;">{label}</div>
                                <div style="width: 124px; display: flex; justify-content: space-between; background-color: #fcf0de; height: 12px;">
                                {#each Array(5) as _, i}
                                    <div style="width: 1px; height: 12px;" class:border={i !== 0 && i !== 4}></div>
                                {/each}
                                </div>
                            </div>
                            {/each}
                        </div>
                        <div style="width: 42px; padding: 6px; height: 74px; background-color: #fcf0de; border-radius: 3px; color: #2c622e; font-size: 8.5px; text-align: center; margin-top: 5px;">총 점</div>
                    </div>

                    <div style="padding: 9px; height: 58px; background-color: #fcf0de; border-radius: 3px; color: #2c622e; font-size: 9px; margin-top: 8px;"><i>Flavor :</i></div>
                
                </div>

                <div style="display: flex; align-items: center; width: 210px; padding: 0 0 12px 6px; border-bottom: 0.5px solid #2c622e; font-size: 13px; margin-top: 48px;">
                    <i>From Roaster. </i>
                </div>
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

    let moment_arr = [
        "신나는", "편안한", "설레는", "행복한",
        "우울한", "외로운", "불안한", "슬픈",
        "화난", "짜증나는", "피곤한", "상쾌한",
        "이른아침", "한 낮", "해 질 녘", "깊은 저녁",
        "화창한", "흐린", "추운", "더운",
        "따뜻한", "쌀쌀한", "비오는", "눈오는"
    ];
    let moment_row_length = 4;
    let moment_row_count = Math.ceil(moment_arr.length / moment_row_length);

    let flavor_arr = ["향", "고소함", "산미", "쓴맛", "바디감"];

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
                width: 60
            },
            { 
                headerName: "상품번호", 
                field: "PRODUCT_NO"
            },
            { 
                headerName: "브라질", 
                field: "브라질"
            },
            { 
                headerName: "과테말라", 
                field: "과테말라"
            },
            { 
                headerName: "콜롬비아", 
                field: "콜롬비아"
            },
            { 
                headerName: "에티오피아", 
                field: "에티오피아"
            },
            { 
                headerName: "케냐", 
                field: "케냐"
            },
            { 
                headerName: "맛", 
                field: "맛",
                width: 200
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
                }
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
                suppressMovable: true
            },
            suppressPaste: true,
            overlayLoadingTemplate: "<div class='grid_loading'></div>",
            overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>",
        };

        new Grid(ref_this_grid, grid_options);
        grid_options.api.setRowData([]);
    }
</script>
