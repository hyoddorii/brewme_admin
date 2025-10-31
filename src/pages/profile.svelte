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
        padding: 6px;
    }
    .th_necessary_cls {
        background-color: #ffd384;
    }

    /* gram 배분 테이블 */
    .table_gram_cls th {
        background-color: #6c6c6c;
        color: #fff;
    }
    .table_gram_cls td {
        background-color: #fcf0de;
        text-align: center;
    }

    /* 프린트 미리보기 영역 */
    .div_print_cls {
        width: 560px;
        min-width: 560px;
        height: 795px;
        min-height: 795px;
        padding: 44px 30px;
        box-sizing: border-box; 
        color: #2c622e;
        font-family: 'HappinessSans', sans-serif;
    }
    .div_print_head_cls {
        display: flex;
        align-items: center; 
        justify-content: space-between;
    }
    .div_print_head_logo_cls {
        margin: 0 20px 0 6px;
    }
    .div_print_head_logo_cls img {
        width: 140px;
    }
    .div_print_head_des_cls {
        font-size: 10px; 
        line-height: 1.2;
    }
    .div_print_content_cls {
        display: flex; 
        margin: 37px 6px;
    }
    .div_print_content_left_cls {
        margin-right: 30px;
    }
    .div_print_content_right_cls {
        width: 100%;
        margin-top: 15px;
    }

    /** 프린트 미리보기 (좌측) */
    .div_print_content_left_head_cls {
        display: flex; 
        align-items: center;
        font-size: 15px; 
        margin: 31px 0 13.5px 0;
    }
    .hr_print_content_left_head_cls {
        width: 12px;
        height: 0.5px;
        border: none; 
        background-color: #2c622e; 
        margin: 0 6px 0 0;
    }
    .div_print_name_cls {
        display: flex; 
        align-items: center; 
        width: 210px; 
        border-bottom: 0.5px solid #2c622e; 
        font-size: 13px;
        padding: 0 0 12px 6px;
    }
    .span_print_name_cls {
        color: #56514b; 
        font-size: 12px; 
        margin-left: 16px;
    }
    .div_roasting_type_cls {
        margin-top: 14px; 
        font-size: 14px; 
        font-weight: 600;
    }
    .div_grind_type_cls {
        margin: 7px 0 13px 0; 
        font-size: 11px;
    }
    .div_grind_type_cls span {
        font-weight: 600;
    }
    .div_origin_name_cls {
        margin-top: 4.5px; 
        font-size: 12.5px; 
        font-weight: 600;
    }
    .div_origin_name_cls span {
        font-weight: normal; 
        font-size: 10px; 
        margin: 0 4px;
    }
    .div_print_good_for_cls {
        margin-top: 11px; 
        font-size: 10px;
    }
    .div_qr_cls {
        display: flex; 
        align-items: end;
        margin-top: 69px; 
    }
    .img_qr_cls {
        width: 53px; 
        height: 53px;
    }
    .img_headphone_cls {
        width: 14px; 
        height: 12.5px;
        margin: 0 0 4px 11px;
    }
    .div_qr_des_cls {
        font-size: 8px; 
        margin: 0 0 5px 6px;
    }

    /** 프린트 미리보기 (우측) */
    .div_print_brand_story_cls {
        font-size: 8px; 
        line-height: 1.5;
    }
    .div_small_logo_cls {
        display: flex; 
        justify-content: space-between;
        align-items: end;
    }
    .div_small_logo_cls div {
        margin-top: 45px; 
        font-size: 15px; 
        font-weight: 600; 
        line-height: 1.15;
    }
    .div_small_logo_cls img {
        width: 44px; 
        height: 30px;
    }
    .div_tasting_notes_cls {
        background-color: #818a5c; 
        color: #fff; 
        margin-top: 18px; 
        padding: 14px 16px;
    }
    .div_tasting_notes_date_cls {
        margin-top: 10px;
        font-size: 9px;
    }
    .div_tasting_notes_des_cls {
        margin: 8px 0;
        font-size: 9px;
    }
    .div_moment_cls {
        display: flex; 
        align-items: center; 
        font-size: 7px; 
        margin: 6px 0 0 16px;
    }
    .div_moment_entry_cls {
        display: flex; 
        align-items: center; 
        width: 50px;
    }
    .div_moment_box_cls {
        width: 8px; 
        height: 8px; 
        border: 0.5px solid #fff; 
        margin-right: 4px;
    }
    .div_moment_border_cls {
        width: 94%;
        border-top: 0.5px dashed #ccc; 
        margin: 6px auto 0 auto;
    }
    .div_flavor_cls {
        width: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: start;
    }
    .div_flavor_score_cls {
        width: 124px; 
        display: flex; 
        justify-content: space-between; 
        margin: 10px 0 0 30px;
        font-size: 7px; 
    }
    .div_flavor_eval_cls {
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-top: 6px;
    }
    .div_flavor_label_cls {
        width: 30px;
        color: #fff; 
        font-size: 8px; 
    }
    .div_flavor_box_cls {
        width: 124px; 
        height: 12px;
        display: flex; 
        justify-content: space-between;
        background-color: #fffffefa; 
    }
    .div_flavor_border_cls {
        border-left: 0.1px dashed #818a5c;
    }
    .div_flavor_total_cls {
        background-color: #fffffefa; 
        border-radius: 3px; 
        color: #2c622e; 
        font-size: 8.5px; 
        padding: 6px; 
        width: 42px;
        height: 74px; 
        text-align: center;
        margin-top: 5px;
    }
    .div_flavor_text_cls {
        background-color: #fffffefa; 
        border-radius: 6px; 
        color: #2c622e; 
        font-size: 9px; 
        padding: 10px; 
        height: 56px; 
        margin-top: 8px;
    }

    /** 프린트 출력하기 버튼 */
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
            <div>커스텀 프로파일 출력</div>
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
                <th class="th_necessary_cls">로스팅</th>
                <td colspan="3">
                    <div style="display: flex;">
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="Light">산뜻한
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="Medium">균형있는
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="roasting_type" bind:group={ref_profile_obj.roasting_type} value="Dark">풍미있는
                        </label>
                    </div>
                </td>
            </tr>
            <tr>
                <th class="th_necessary_cls">분쇄도</th>
                <td colspan="3">
                    <div style="display: flex;">
                        <label class="label_radio_box">
                            <input type="radio" name="grind_type" bind:group={ref_profile_obj.grind_type} value="홀빈">홀빈
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="grind_type" bind:group={ref_profile_obj.grind_type} value="에스프레소">에스프레소
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="grind_type" bind:group={ref_profile_obj.grind_type} value="핸드드립">핸드드립
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="grind_type" bind:group={ref_profile_obj.grind_type} value="콜드브루">콜드브루
                        </label>
                        <label class="label_radio_box">
                            <input type="radio" name="grind_type" bind:group={ref_profile_obj.grind_type} value="모카포트">모카포트
                        </label>
                    </div>
                </td>
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
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.steam_water}>ml 내리고&nbsp;
                    <input type="number" class="input_style input_half_style" bind:value={ref_profile_obj.steam_second}>초
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
                <th></th>
                <td></td>
            </tr>
            </tbody>
        </table>
        <div bind:this={ref_this_grid} class="ag-theme-balham"></div>
        <table class="table table_bordered table_gram_cls" style="margin-top: 8px;">
            <colgroup>
                <col style="width: 138px;">
                <col style="width: 79px;">
                <col style="width: 79px;">
                <col style="width: 79px;">
                <col style="width: 79px;">
                <col style="width: 79px;">
                <col style="width: 278px;">
            </colgroup>
            <tbody>
                <tr>
                    <th>200g</th>
                    <td>{ref_gram_obj["200_Brazil"]} g</td>
                    <td>{ref_gram_obj["200_Guatemala"]} g</td>
                    <td>{ref_gram_obj["200_Colombia"]} g</td>
                    <td>{ref_gram_obj["200_Ethiopia"]} g</td>
                    <td>{ref_gram_obj["200_Kenya"]} g</td>
                    <td></td>
                </tr>
                <tr>
                    <th>500g</th>
                    <td>{ref_gram_obj["500_Brazil"]} g</td>
                    <td>{ref_gram_obj["500_Guatemala"]} g</td>
                    <td>{ref_gram_obj["500_Colombia"]} g</td>
                    <td>{ref_gram_obj["500_Ethiopia"]} g</td>
                    <td>{ref_gram_obj["500_Kenya"]} g</td>
                    <td></td>
                </tr>
                <tr>
                    <th>1kg</th>
                    <td>{ref_gram_obj["1000_Brazil"]} g</td>
                    <td>{ref_gram_obj["1000_Guatemala"]} g</td>
                    <td>{ref_gram_obj["1000_Colombia"]} g</td>
                    <td>{ref_gram_obj["1000_Ethiopia"]} g</td>
                    <td>{ref_gram_obj["1000_Kenya"]} g</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="div_container_right_cls">
        <div class="div_print_cls">
            <div class="div_print_head_cls">
                <div class="div_print_head_logo_cls">
                    <img src="/assets/images/logo.svg" alt="">
                </div>
                <div class="div_print_head_des_cls">
                    <b>Brewing</b> is not just about getting hot.
                    <b>Brewing</b> is about removing impurities and reaching the essence.
                    In the time that slowly brews you, may you discover a better version of yourself.
                </div>
            </div>

            <div class="div_print_content_cls">
                <div class="div_print_content_left_cls">
                    <div class="div_print_name_cls">
                        <i>Dear. <span class="span_print_name_cls">{ref_profile_obj.cust_name}</span></i>
                    </div>
                    <div class="div_print_name_cls" style="padding-top: 18px;">
                        <i>Date. <span class="span_print_name_cls">{dayjs(ref_profile_obj.date).format("YYYY.MM.DD")}</span></i>
                    </div>

                    <div class="div_print_content_left_head_cls" style="margin-top: 48.5px;">
                        <hr class="hr_print_content_left_head_cls"><i>Information</i>
                    </div>
                    <div class="div_roasting_type_cls">{ref_profile_obj.roasting_type} Roasting</div>
                    <div class="div_grind_type_cls"><span>분쇄도 : </span>{ref_profile_obj.grind_type}</div>
                    <div style="height: 81px;">
                        {#each ref_origin_arr as origin}
                        <div class="div_origin_name_cls">{origin.name}<span>{origin.process}</span>{origin.ratio}%</div>
                    {/each}
                    </div>  

                    <div class="div_print_content_left_head_cls">
                        <hr class="hr_print_content_left_head_cls"><i>Note</i>
                    </div>
                    <div style="height: 56px;">
                    {#each ref_note_arr as arr}
                        <div style="margin-top: 3.5px; font-size: 11.5px;">{arr}</div>
                    {/each}
                    </div>

                    <div class="div_print_content_left_head_cls">
                        <hr class="hr_print_content_left_head_cls" s><i>Good For</i></div>
                    <div class="div_print_good_for_cls"><b>물 온도</b> : {ref_profile_obj.water_temperature}°C</div>
                    <div class="div_print_good_for_cls"><b>추출방법</b> : {ref_profile_obj.grind_recommend} / <b>원두 중량</b> : {ref_profile_obj.bean_weight}g</div>
                    <div class="div_print_good_for_cls"><b>뜸 들이기</b> : {ref_profile_obj.steam_water}ml 내리고 {ref_profile_obj.steam_second} 초</div>
                    <div class="div_print_good_for_cls"><b>물의 양</b> : {ref_profile_obj.water_weight}ml / <b>추출 시간</b> : {ref_profile_obj.brew_start_minute}분 {ref_profile_obj.brew_start_second}초 ~ {ref_profile_obj.brew_end_minute}분 {ref_profile_obj.brew_end_second}초</div>

                    <div class="div_qr_cls">
                        {#if ref_profile_obj.roasting_type == "Light"}
                            <img src="/assets/images/qrcode/light.svg" alt="" class="img_qr_cls">
                        {:else if ref_profile_obj.roasting_type == "Medium"}
                            <img src="/assets/images/qrcode/medium.svg" alt="" class="img_qr_cls">
                        {:else if ref_profile_obj.roasting_type == "Dark"}
                            <img src="/assets/images/qrcode/dark.svg" alt="" class="img_qr_cls">
                        {:else}
                            <div class="img_qr_cls" style="border: 0.5px solid #2c622e;"></div>
                        {/if}
                        <img src="/assets/images/headphone.png" alt="" class="img_headphone_cls">
                        <div class="div_qr_des_cls">4 Minutes for You</div>
                    </div>
                </div>

                <div class="div_print_content_right_cls">
                    <div class="div_print_brand_story_cls">
                        끓는다는 것은 단순히 뜨거워지는 일이 아닙니다.<br>
                        끓는다는 것은 불순물을 걷어내고 본질에 다가가는 일입니다.<br>
                        서서히 끓어오르는 시간 속에서,<br>
                        더 나은 당신을 발견할 수 있도록 함께 합니다.<br>
                        <b>BREW ME BETTER, 브루미입니다.</b>
                    </div>

                    <div class="div_small_logo_cls">
                        <div>BREW<br>ME<br>BETTER</div>
                        <img src="/assets/images/symbol.svg" alt="">
                    </div>

                    <div class="div_tasting_notes_cls">
                        <div><i>Tasting Notes :</i></div>
                        <div class="div_tasting_notes_date_cls">DATE:<span style="margin: 0 40px;">.</span>.</div>
                        <div class="div_tasting_notes_des_cls">이 커피를 추천하는 순간</div>
                        {#each Array(moment_row_count) as _, moment_row_idx}
                            {#if moment_row_idx === 3}<div class="div_moment_border_cls"></div>{/if}
                            <div class="div_moment_cls">
                                {#each moment_arr.slice(moment_row_idx * moment_row_length, moment_row_idx * moment_row_length + moment_row_length) as item}
                                <div class="div_moment_entry_cls">
                                    <div class="div_moment_box_cls"></div>
                                    <div>{item}</div>
                                </div>
                                {/each}
                            </div>
                            {#if moment_row_idx === 3}<div class="div_moment_border_cls"></div>{/if}
                        {/each}

                        <div class="div_flavor_score_cls">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        </div> 
                        <div class="div_flavor_cls">
                            <div>
                                {#each flavor_arr as label}
                                <div class="div_flavor_eval_cls">
                                    <div class="div_flavor_label_cls">{label}</div>
                                    <div class="div_flavor_box_cls">
                                    {#each Array(5) as _, i}
                                        <div style="width: 1px; height: 12px;" class:div_flavor_border_cls={i !== 0 && i !== 4}></div>
                                    {/each}
                                    </div>
                                </div>
                                {/each}
                            </div>
                            <div class="div_flavor_total_cls">총 점</div>
                        </div>

                        <div class="div_flavor_text_cls"><i>Flavor :</i></div>
                    </div>

                    <div class="div_print_name_cls" style="margin-top: 48px; width: 242px;">
                        <i>From Roaster. </i>
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
        roasting_type: "",
        grind_type: "",
        water_temperature: "90",
        grind_recommend: "핸드드립",
        bean_weight: "30",
        water_weight: "330",
        steam_water: "50",
        steam_second: "30",
        brew_start_minute: "2",
        brew_start_second: "0",
        brew_end_minute: "2",
        brew_end_second: "30",
    };

    let ref_gram_obj = {
        "200_Brazil": 0,
        "200_Guatemala": 0,
        "200_Colombia": 0,
        "200_Ethiopia": 0,
        "200_Kenya": 0,
        "500_Brazil": 0,
        "500_Guatemala": 0,
        "500_Colombia": 0,
        "500_Ethiopia": 0,
        "500_Kenya": 0,
        "1000_Brazil": 0,
        "1000_Guatemala": 0,
        "1000_Colombia": 0,
        "1000_Ethiopia": 0,
        "1000_Kenya": 0,
    };

    let ref_origin_arr = [];
    let ref_note_arr = [];
    const origin_process_obj = {
        브라질: "Natural",
        과테말라: "Washed",
        콜롬비아: "Washed",
        에티오피아: "Washed",
        케냐: "Washed"
    };
    const origin_name_obj = {
        브라질: "Brazil",
        과테말라: "Guatemala",
        콜롬비아: "Colombia",
        에티오피아: "Ethiopia",
        케냐: "Kenya"
    };

    const moment_arr = [
        "신나는", "편안한", "설레는", "행복한",
        "우울한", "외로운", "불안한", "슬픈",
        "화난", "짜증나는", "피곤한", "상쾌한",
        "이른 아침", "한 낮", "해 질 녘", "깊은 저녁",
        "화창한", "흐린", "추운", "더운",
        "따뜻한", "쌀쌀한", "비오는", "눈오는"
    ];
    const moment_row_length = 4;
    const moment_row_count = Math.ceil(moment_arr.length / moment_row_length);
    const flavor_arr = ["향", "고소함", "산미", "쓴맛", "바디감"];

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
            roasting_type: "",
            grind_type: "",
            water_temperature: "90",
            grind_recommend: "핸드드립",
            bean_weight: "30",
            water_weight: "330",
            steam_water: "50",
            steam_second: "30",
            brew_start_minute: "2",
            brew_start_second: "0",
            brew_end_minute: "2",
            brew_end_second: "30",
        }
        for (const key in ref_gram_obj) {
            ref_gram_obj[key] = 0;
        }
        grid_options.api.deselectAll();
        ref_origin_arr = [];
        ref_note_arr = [];
    }

    /** 출력하기 */
    function on_click_print() {
        if (Object.values(ref_profile_obj).some(value => g_nvl2(value,"") === "")) {
            return alert("빈 항목을 입력해주세요.");
        }
        if(ref_origin_arr.length == 0 || ref_note_arr.length == 0) {
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
                width: 280
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
                ref_origin_arr = [];
                ref_note_arr = [];
                ref_note_arr = params.data["맛"].split(",").map(s => s.trim());
                for (let key in params.data) {
                    if (origin_process_obj[key] && params.data[key] > 0) {
                        ref_origin_arr.push({
                            name: origin_name_obj[key],
                            process: origin_process_obj[key],
                            ratio: params.data[key]
                        });
                    }
                }
                ref_origin_arr = ref_origin_arr;

                // gram 분배 계산
                console.log("ref_origin_arr",ref_origin_arr);
                for (const key in ref_gram_obj) {
                    ref_gram_obj[key] = 0;
                }
                for (let data of ref_origin_arr) {
                    ref_gram_obj["200_"+data.name] = 200 * (Number(data.ratio) / 100);
                    ref_gram_obj["500_"+data.name] = 500 * (Number(data.ratio) / 100);
                    ref_gram_obj["1000_"+data.name] = 1000 * (Number(data.ratio) / 100);
                }
            },
            suppressPaste: true,
            overlayLoadingTemplate: "<div class='grid_loading'></div>",
            overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>",
        };

        new Grid(ref_this_grid, grid_options);
        grid_options.api.setRowData([]);
    }
</script>
