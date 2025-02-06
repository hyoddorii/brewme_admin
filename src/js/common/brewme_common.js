/**
 * 화면 이외에 사용하는 공통함수
 */

// import {openDB} from "idb";

/**
 * 빈값 체크
 * @param text
 * @param rText
 * @returns {string}
 */
export function g_nvl(text, rText) {
    if (text == null || text == undefined) text = "";
    if (rText != null && text == "") text = rText;
    return text;
}

/**
 * 빈값 체크 ver2 > 기존 동등연산자(==)가 아닌 일치연산자(===)로 빈값을 더 엄격하게 체크하는 버전
 * @param text
 * @param rText
 * @returns {string}
 */
export function g_nvl2(text, rText) {
    if (text === null || text === undefined) text = "";
    if (rText !== null && rText !== undefined && text === "") text = rText;
    return text;
}

/**
 * 빈 오브젝트 체크
 * @param obj
 * @param text
 * @returns {*}
 */
export function g_nvl_obj(obj,text){
    for (let key in obj){
        obj[key] = g_nvl(obj[key],text);
    }
    return obj;
}

/**
 * 빈 오브젝트 체크 ver2 > g_nvl2로 빈값을 더 엄격하게 체크하는 버전
 * @param obj
 * @param text
 * @returns {*}
 */
export function g_nvl2_obj(obj,text){
    for (let key in obj){
        obj[key] = g_nvl2(obj[key],text);
    }
    return obj;
}

/**
 * 2023-03-12
 * 콤마찍기
 * 빈값이면 default 값이 0
 * uc 가 없더라도 comma 를 모두 지운 후 실행한다.
 */
export function comma(str) {
    str = String(Number(String(g_nvl(str, "0")).replace(/[^0-9-]/g,"")));
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

    // str = String(g_nvl(str, "0"));
    // return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

/**
 * 2024-03-15
 * 키이벤트시 콤마찍기
 * 빈값이나 0 이면 default 값은 빈값
 */
export function comma_key_event(str) {
    str = String(Number(String(g_nvl(str, "0")).replace(/[^0-9-]/g,"")));
    if(str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,") === "0"){
        return "";
    }else{
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    }
}

/**
 * 콤마풀기
 * null_allowed_flag에 따라 return을 0 or ""로 함.
 * @param str
 * @param null_allowed_flag
 * @returns {string|number}
 */
export function uc(str, null_allowed_flag) {
    if(null_allowed_flag == true &&(str == "" || str == null)){
        return "";
    }else if((null_allowed_flag == false || null_allowed_flag == undefined) && (str == "" || str == null)){
        return 0;
    }

    // String 바꿔주는 이유: replace() -> number 일때 사용불가
    let replace_str = String(str);
    let minus_flag = "";
    if( replace_str.indexOf("-")>-1){
        minus_flag = "-";
    }
    return minus_flag + replace_str.replace(/[^\d]+/g, '');
    // return str.replace(/[^0-9-.]/g, '');
}

// lpad("A", 3, 0); ==> result: 00A
export function lpad(string_value, pad_length, pad_string){
    while(string_value.length < pad_length)
        string_value = pad_string + string_value;
    return string_value;
}
// rpad("A", 3, 0); ==> result: A00
export function rpad(string_value, pad_length, pad_string){
    while(string_value.length < pad_length)
        string_value += pad_string;
    return string_value;
}

// base64 encoding using utf-8 character set
export function base64_encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// Parse the base64 string using the utf-8 character set
export function base64_decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
}


/**********************************************************************************************************************
 * 레티나 배열(array) , 오브젝트(Object) 관리
 * 목적 : underscore, lodash 를 대체하는 기능을 구현
 **********************************************************************************************************************/
/**
 * 객체배열 또는 배열에서 unique 하게 값을 추출한다.
 * @param collection
 * @param iteratee
 * @returns {any[]}
 * 예)
 g_unique(data, "OPT_NO"); // 객체배열에서 객체키(OPT_NO) 를 unique 한 내용만 객체배열로 추출한다.
 g_unique(arr1); // 배열에서 값을 unique 하게 추출한다.
 */
export function g_unique(collection, iteratee) {
    let item_array = []; // 전달할 배열을 만든다.
    if (typeof collection[0] === "object") {
        const sort_array = []; // 중복필터링 된 배열
        collection.forEach(function(item){
            let is_exist = 0;
            for(let i=0; i<sort_array.length; i++){
                if(item[iteratee] == sort_array[i]) {
                    is_exist = 1; // 존재한다면 PASS
                    return;
                }
            }
            if(is_exist === 0) { // 최초라면.
                item_array.push(item);
                sort_array.push(item[iteratee]);
            }
        });
    } else {
        item_array = collection;
    }
    return [...new Set(item_array)];
}

/**
 * 객체배열을 정렬한다.
 * @param collection : 객체배열
 * @param iteratees : 정렬대상을 배열로 전달
 * @param orders : 정렬대상의 순서를 배열로 전달 ("asc","desc")
 * @param data_type : 정렬대상의 데이터 타입 ("string","number")
 * 예)
 g_orderby(data, ["GROUP_NO", "OPT_NO"], ["asc", "asc"]); // GROUP_NO 1차정렬, OPT_NO 2차정렬
 g_orderby(data, ["GROUP_NO", "OPT_NO","ORDER_DT"], ["asc", "desc","desc"]);
 g_orderby(data, ["GROUP_NO", "OPT_NO"]); // 축약적으로 사용 (기본값은 "asc")
 */
export function g_orderby(collection, iteratees, orders, data_type, null_sorts) {

    // convert_number를 sort함수 실행 전에 해줘야 명시했던 data_type대로 반환받을 수 있음
    if(data_type !== undefined && data_type.length > 0){
        for (let i = 0; i < iteratees.length; i++) {
            const item = iteratees[i];
            for (let collect of collection) {
                collect[item] = data_type[i] === "number" ? convert_number(collect[item]) : collect[item];
            }
        }
    }

    collection.sort(function (a, b) {
        for (let i = 0; i < iteratees.length; i++) {
            const item = iteratees[i];
            const order = orders === undefined ? "asc" : orders[i]; // asc(오름차순) , desc(내림차순)
            const null_sort = null_sorts === undefined ? "first" : null_sorts[i];   // first(빈값을 맨 앞으로) , last(빈값을 맨 뒤로)

            // 빈값("", null, undefined) 끼리 같을 때에도 다음 null_sort를 위해 반복문 재실행
            // g_nvl을 쓰면 0도 빈값으로 치환될 수 있기 때문에 g_nvl2사용
            if (g_nvl2(a[item], "") === g_nvl2(b[item], "")) continue;

            if (g_nvl2(a[item], "") === "") { return null_sort === "last" ? 1 : -1; }
            if (g_nvl2(b[item], "") === "") { return null_sort === "last" ? -1 : 1; }

            if (a[item] > b[item]) { return order === "desc" ? -1 : 1; }
            if (a[item] < b[item]) { return order === "desc" ? 1 : -1; }
        }
    });

    function convert_number(node) {
        if(g_nvl(node,"") == "") {
            return node;
        }
        return Number(node);
    }
}

/**
 *
 * @param collection : data
 * @param iteratees : 컬럼정보
 * @param type_array : sorting 종류 ( axis , sph, cyl )
 * 예제)
 g_diopter_orderby( sph_data, ["AXIS","SPH"], ["axis","sph"] );
 g_diopter_orderby( sph_data, [CYL"], ["cyl"] );
 g_diopter_orderby( sph_data, ["CYL","SPH"], ["cyl","sph"] );
 g_diopter_orderby( sph_data, ["SPH","CYL"], ["sph","cyl"] );
 */
export function g_diopter_orderby(collection, iteratees, type_array) {
    collection.sort(function (a, b) {
        for(let i=0 ; i < iteratees.length ; i++) {
            const item = iteratees[i];
            // const type = type_array === undefined ? "sph" : type_array[i];
            const type = type_array[i];
            if ( diopter_sorting(a[item]) > diopter_sorting(b[item]) ) {
                return type === "axis" ? -1 : 1; // 1(오름차순) , -1(내림차순)
            }
            if ( diopter_sorting(a[item]) < diopter_sorting(b[item]) ) {
                return type === "axis" ? 1 : -1; // 1(오름차순) , -1(내림차순)
            }
        }
    });
    function diopter_sorting(sph) {
        return Math.abs(sph) * 100 +  ((Number(sph) > 0 )?1000:0);
    }
}

/**
 * 두개의 object 의 key, value 가 같은지 확인해서 true/false 리턴한다.
 * @param obj1
 * @param obj2
 * @returns {boolean}
 * 예)
 const a_obj = { maroon: "#800000", purple: "#654321" };
 const b_obj = { purple: "#654321", maroon: "#800000" };
 const c_obj = { purple: "#800080", maroon: "#654333" };
 console.log("a_obj vs b_obj =>", g_is_equal(a_obj, b_obj)); // true
 console.log("a_obj vs c_obj =>", g_is_equal(a_obj, c_obj)); // false
 */
export function g_is_equal(obj1, obj2) {
    for (let key in obj1) {
        if (!(key in obj2)) return false;
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

/**
 * 객체배열을 특정 key 값으로 object > array 를 만든다.
 * @param collection
 * @param iteratee
 * @returns {{}}
 * 예)
 *  const temp_group = g_groupby(result.out1,"KOREA_NAME");
 */
export function g_groupby(collection, iteratee) {
    const item_array = collection.map((item) => item[iteratee]);
    const item_unique = [...new Set(item_array)];
    const result_obj = {};
    item_unique.forEach(function(iname){
        result_obj[iname] = [];
    });
    collection.forEach(function(item){
        result_obj[item[iteratee]].push(item);
    });
    return result_obj;
}

/**********************************************************************************************************************
 * 레티나 서비스 key 입력 이벤트
 * 목적 : int/float 값, diopter(SPH,CYL), 난시축(AXIS), 전화번호, 사업자번호 등에 대한 key 이벤트를 공통으로 사용
 **********************************************************************************************************************/
/**
 * html 에서 id/class 값을 체크하여 정수(integer) 값으로 변경해 준다. (양수/음수)
 * @param id_name
 * 예)
 *  int_key_event(".input_only_int_cls");
 *  int_key_event("#input_only_int_cls");
 */
export function int_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        // 쉼표(,) 포함 20자리로 제한.
        element.maxLength = 20;
        // only_number_cls 가 없는 경우에만 다시 적용.
        // html 이 append 될 경우, 기존에 적용된 이벤트를 제외하고, 새로 만들어진 class 에만 적용한다.
        const classes = element.classList;
        if ( ! classes.contains("only_integer_cls") ) { // if(!$(this).hasClass("only_integer_cls")) {
            element.addEventListener("keydown",function(e) { // $(this).keydown(function (e) {
                // Allow: backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                const keyup_allow_list = [8, 9, 13, 16, 27, 45, 46];
                if (
                    keyup_allow_list.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    // Allow: End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    // Allow: Ctrl + a(65) , c(67) , v(86) , z(90)
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                ) {
                    // let it happen, don't do anything
                    // console.log('[1] integer_key_event keypress = (' + e.keyCode + ')'); // 키보드가 입력을 막음
                    return;
                }
                // Ensure that it is a number and stop the keypress
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_list = [109, 189];
                if (
                    keydown_allow_list.indexOf(e.keyCode) === -1 &&
                    (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
                    (e.keyCode < 96 || e.keyCode > 105)
                ) {
                    // console.log('[2] number_key_event keypress = (' + e.keyCode + ')'); // 키보드가 입력을 막음
                    e.preventDefault();
                }
            });
            element.addEventListener("keyup",function(e) {
                e.target.value = string_to_int_change(e.target.value);
            });
            element.classList.add("only_integer_cls");
        } // if(!$(this).hasClass("only_integer_cls")) {

        element.style.textAlign = "right";
    }); // $(class_name).each(function(){
}
// int_key_event 에서 사용
export function string_to_int_change(input_value) {
    const minus_value = (input_value[0] == "-")?"-":"";
    const num = input_value.replace(/[^0-9]/g, '');
    // 3자리마다 콤마(,)를 찍어준다.
    let result_num = num_format(String(Number(num)) === '0' ? '' : String(Number(num)) );
    return minus_value + result_num;
}
export function num_format(n){
    let reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
    n = String(n);   				  // 숫자 -> 문자변환
    while(reg.test(n)){
        n = n.replace(reg, "$1" + "," + "$2");
    }
    return n;
}

/**
 * html 에서 id/class 값을 체크하여 실수(floating point) 값으로 변경해 준다. (양수/음수)
 * @param id_name
 * 예)
 *  float_key_event(".input_only_float_cls");
 *  float_key_event("#input_only_float_cls");
 */
export function float_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        // 쉼표(,) 포함 20자리로 제한.
        element.maxLength = 20;
        // only_number_cls 가 없는 경우에만 다시 적용.
        // html 이 append 될 경우, 기존에 적용된 이벤트를 제외하고, 새로 만들어진 class 에만 적용한다.
        const classes = element.classList;
        if ( ! classes.contains("only_float_cls") ) { // if(!$(this).hasClass("only_float_cls")) {
            element.addEventListener("keydown",function(e) { // $(this).keydown(function (e) {
                // Allow: backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                const keyup_allow_list = [8, 9, 13, 16, 27, 45, 46];
                if (
                    keyup_allow_list.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    // Allow: End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    // Allow: Ctrl + a(65) , c(67) , v(86) , z(90)
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                ) {
                    // let it happen, don't do anything
                    // console.log('[1] float_key_event keypress = (' + e.keyCode + ')'); // 키보드가 입력을 막음
                    return;
                }
                // Ensure that it is a number and stop the keypress
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_list = [109, 110, 189, 190];
                if (
                    keydown_allow_list.indexOf(e.keyCode) === -1 &&
                    (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
                    (e.keyCode < 96 || e.keyCode > 105)
                ) {
                    // console.log('[2] float_key_event keypress = (' + e.keyCode + ')'); // 키보드가 입력을 막음
                    e.preventDefault();
                }
            });
            element.addEventListener("keyup",function(e) {
                e.target.value = string_to_float_change(e.target.value);
            });
            element.classList.add("only_float_cls");
        } // if(!$(this).hasClass("only_float_cls")) {

        element.style.textAlign = "right";
    }); // $(class_name).each(function(){
}
// float_key_event 에서 사용
export function string_to_float_change(input_value) {
    const minus_value = (input_value[0] == "-")?"-":"";
    const num = input_value.replace(/[^0-9.]/g, '');
    const start_num = num.indexOf('.');
    // 첫번째 나오는 쩜(.)만 나오게 처리.
    let temp_num = num.substr(0,start_num+2) + num.substr(start_num+2,num.length).replace(/[^0-9]/g, '');
    // 값이 . 으로만 이루어져 있을 경우 '' 로 치환 , 뒷자리에 '..'로 끝나면, '.' 로 치환
    temp_num =  ( temp_num === '.' || temp_num === '..' ) ? '' : temp_num.replace('..','.') ;
    const last_char = temp_num.charAt(temp_num.length-1) === '.' ? '.' : '';
    // 3자리마다 콤마(,)를 찍어준다.
    const result_num = num_format(String(Number(temp_num)) === '0' ? '' : String(Number(temp_num)) ) + last_char;
    return minus_value + result_num;
}

/**
 * html 에서 id/class 값을 체크하여 diopter (SPH,CYL) 값으로 변경해 준다.
 * @param class_name
 *  diopter_key_event(".input_only_diopter_cls");
 *  diopter_key_event("#input_only_diopter_cls");
 */
export function diopter_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){ // $(class_name).each(function(){
        const classes = element.classList;
        if ( ! classes.contains("only_diopter_cls") ) { // if(!$(this).hasClass("only_diopter_cls")) {
            element.addEventListener("keydown",function(e) { // $(this).keydown(function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }
                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup",function(e) { // $(this).keyup(function (e) {
                e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 (2023-01-05)

                if (e.target.value != "" && e.target.value.replace(/[^0-9]/g, '').length < 3 ) {
                    // console.log("[R] e.target.value",e.target.value);
                    return e.target.value;
                } else {
                    e.target.value = string_to_diopter_change(e.target.value);
                    // console.log("e.target.value",e.target.value);
                }

                // Arrow Key Event
                const arrow_key_value = Number(g_nvl(e.target.value,"0"));
                if (isNaN(arrow_key_value)) { // 숫자가 아닌경우
                    return;
                }
                if (e.keyCode === 38) { // UP Arrow Key +0.25
                    let result_value = (arrow_key_value + 0.25).toFixed(2);
                    if (Number(result_value) > 0) { // 0이상일 경우 +를 붙여준다.
                        result_value = "+" + Number(result_value).toFixed(2);
                    }
                    e.target.value = result_value;
                } else if (e.keyCode === 40) { // DOWN Arrow Key -0.25
                    let result_value = (arrow_key_value - 0.25).toFixed(2);
                    if (Number(result_value) > 0) { // 0이상일 경우 +를 붙여준다.
                        result_value = "+" + Number(result_value).toFixed(2);
                    }
                    e.target.value = result_value;
                } else { // else Key
                    return;
                }
            });
            // focusin/focusout은 상위 요소인 div 요소의 포커스 이벤트도 트리거하지만, focus/blur는 순수하게 자기 자신의 포커스 이벤트에만 작동시킨다.
            element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
                const class_value = string_to_diopter_change(e.target.value, 1);
                if (Number(class_value) * 100 % 5 !== 0) {
                    e.target.value = ""; // 값을 비워준다.
                } else {
                    e.target.value = class_value;
                }
            });
            element.classList.add("only_diopter_cls");
        } // if(!$(this).hasClass("only_diopter_cls")) {

        element.style.textAlign = "right";
    }); // $(class_name).each(function(){
}
// 125 => -1.25 , 1250 => -12.50
export function string_to_diopter_change(input_string,is_focusout=0) {
    let minus_value;
    // 첫번째 자리 부호 붙이기 ex) '12.25' = '-12.25' or '+12.25'
    if (input_string.length > 0) {
        if (Math.abs(Number(input_string)) === 0) {
            minus_value = ''; // 0 일때, 부호처리.
        } else if (input_string.substr(0,1) !== "+" && input_string.substr(0,1) !== "-") {
            minus_value = '-'; // '+','-' 가 아닐 경우, '-'로 처리
        } else {
            minus_value = input_string.substr(0,1); // '+','-' 일 경우, 그대로 사용.
        }
    }
    let number_only_string = input_string.replace(/[^0-9]/g, '').substr(0,4);
    if (Number(number_only_string) === 0 && is_focusout === 1) { // focusout 일때만 체크.
        return minus_value + '0.00';
    } else if (number_only_string.length === 1) { // 1자리
        return minus_value + number_only_string.substr(0, 1) + '.00';
    } else if (number_only_string.length === 2) { // 2자리
        return minus_value + number_only_string.substr(0, 1) + '.' + number_only_string.substr(1, 1) + '0';
    } else if (number_only_string.length === 3) { // 3자리
        return minus_value + number_only_string.substr(0, 1) + '.' + number_only_string.substr(1, 2);
    } else if (number_only_string.length === 4) { // 4자리
        return minus_value + number_only_string.substr(0, 2) + '.' + number_only_string.substr(2, 2);
    } else {
        return input_string;
    }
}

/**
 * html 에서 id/class 값을 체크하여 ADD 값으로 변경해 준다.
 * @param class_name
 *  add_key_event(".input_only_add_cls");
 *  add_key_event("#input_only_add_cls");
 */
export function add_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){ // $(class_name).each(function(){
        const classes = element.classList;
        if ( ! classes.contains("only_add_cls") ) { // if(!$(this).hasClass("only_add_cls")) {
            element.addEventListener("keydown",function(e) { // $(this).keydown(function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }

                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup",function(e) { // $(this).keyup(function (e) {
                e.target.value = e.target.value.replace(/[^0-9+-.]/g, ''); // 한글입력 제외 (2023-01-05)

                if (e.target.value != "" && e.target.value.replace(/[^0-9]/g, '').length < 3 ) {
                    // console.log("[R] e.target.value",e.target.value);
                    return e.target.value;
                } else {
                    e.target.value = string_to_add_change(e.target.value);
                    // console.log("e.target.value",e.target.value);
                }

                // Arrow Key Event
                const arrow_key_value = Number(g_nvl(e.target.value, "0"));
                if (isNaN(arrow_key_value)) { // 숫자가 아닌경우
                    return;
                }
                if (e.keyCode === 38) { // UP Arrow Key +0.25
                    let result_value = (arrow_key_value + 0.25).toFixed(2);
                    if (Number(result_value) > 0) { // 0이상일 경우 +를 붙여준다.
                        result_value = "+" + Number(result_value).toFixed(2);
                    }
                    e.target.value = result_value;
                } else if (e.keyCode === 40) { // DOWN Arrow Key -0.25
                    let result_value = (arrow_key_value - 0.25).toFixed(2);
                    if (Number(result_value) > 0) { // 0이상일 경우 +를 붙여준다.
                        result_value = "+" + Number(result_value).toFixed(2);
                    }
                    e.target.value = result_value;
                } else { // else Key
                    return;
                }
            });
            // focusin/focusout은 상위 요소인 div 요소의 포커스 이벤트도 트리거하지만, focus/blur는 순수하게 자기 자신의 포커스 이벤트에만 작동시킨다.
            element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
                const class_value = string_to_add_change(g_nvl(e.target.value, ""), 1);
                if (Number(class_value) * 100 % 5 !== 0) {
                    e.target.value = ""; // 값을 비워준다.
                } else {
                    e.target.value = class_value;
                }
            });
            element.classList.add("only_add_cls");
        } // if(!$(this).hasClass("only_diopter_cls")) {

        element.style.textAlign = "right";
    }); // $(class_name).each(function(){
}
// 125 => +1.25 , 1250 => +12.50
export function string_to_add_change(input_string, is_focusout = 0) {
    let minus_value = "";
    // 첫번째 자리 부호 붙이기 ex) '12.25' = '-12.25' or '+12.25'
    if (input_string.length > 0) {
        if (Math.abs(Number(input_string)) === 0) {
            minus_value = ''; // 0 일때, 부호처리.
        } else if (input_string.substr(0,1) !== "+" && input_string.substr(0,1) !== "-") {
            minus_value = '+'; // '+','-' 가 아닐 경우, '-'로 처리
        } else {
            minus_value = input_string.substr(0,1); // '+','-' 일 경우, 그대로 사용.
        }

        let number_only_string = input_string.replace(/[^0-9]/g, '').substr(0,4);
        if (Number(number_only_string) === 0 && is_focusout === 1) { // focusout 일때만 체크.
            return minus_value + '0.00';
        } else if (number_only_string.length === 1) { // 1자리
            return minus_value + number_only_string.substr(0, 1) + '.00';
        } else if (number_only_string.length === 2) { // 2자리
            return minus_value + number_only_string.substr(0, 1) + '.' + number_only_string.substr(1, 1) + '0';
        } else if (number_only_string.length === 3) { // 3자리
            return minus_value + number_only_string.substr(0, 1) + '.' + number_only_string.substr(1, 2);
        } else if (number_only_string.length === 4) { // 4자리
            return minus_value + number_only_string.substr(0, 2) + '.' + number_only_string.substr(2, 2);
        } else {
            return input_string;
        }
    }

    return "";
}

/**
 * html 에서 id/class 값을 체크하여 난시축 (AXIS) 값으로 변경해 준다.
 * @param class_name
 *  axis_key_event(".input_only_axis_cls");
 *  axis_key_event("#input_only_axis_cls");
 *  is_glass : 안경렌즈일 때는 1단위로 입력 허용되어야 함 (기본값: false, 안경렌즈: true로 호출)
 */
export function axis_key_event(class_name, is_glass=false) {
    document.querySelectorAll(class_name).forEach(function( element ){ // $(class_name).each(function() {
        const classes = element.classList;
        if ( ! classes.contains("only_axis_cls") ) { // if(!$(this).hasClass("only_axis_cls")) {
            element.addEventListener("keydown",function(e) { // $(this).keydown(function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }
                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup",function(e) {
                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 (2023-01-05)
                e.target.value = string_to_axis_change(e.target.value);

                // Arrow Key Event
                let arrow_key_value = Number(e.target.value);
                if (e.keyCode === 38) { // UP Arrow Key +10
                    e.target.value = arrow_key_value + 10;
                    if (e.target.value > 180) {
                        e.target.value = 180;
                    }
                } else if (e.keyCode === 40) { // DOWN Arrow Key -10
                    e.target.value = arrow_key_value - 10;
                    if (e.target.value <= 0) {
                        e.target.value = 0;
                    }
                } else {
                    return;
                }
            });
            element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
                const class_value = string_to_axis_change(e.target.value);
                if (Number(class_value) % 5 !== 0 && !is_glass) {
                    e.target.value = ""; // 값을 비워준다.
                } else {
                    e.target.value = class_value;
                }
            });
            element.classList.add("only_axis_cls");
        } // if(!$(this).hasClass("only_axis_cls")) {

        element.style.textAlign = "right";
    }); // $(class_name).each(function() {
}
// axis 값이므로, 0 ~ 180 값만 가능하도록 설정 ( 0으로 입력하면 180으로 치환 )
export function string_to_axis_change(input_string) {
    //부호 제거 ex) '--', '-+' = '-'
    let input_number = Math.abs(Number(input_string));
    if ( isNaN(input_number) ) {
        return "";
    } else if (input_string === "0" && input_number === 0) { // 입력된 값이 0 이면 180으로 변경
        return "180";
    } else if (input_number  < 0 || input_number > 180) { // 0 ~ 180 사이가 아니라면,
        return "";
    } else {
        return input_string;
    }
}

/**
 * html 에서 id/class 값을 체크하여 BC 값으로 변경해 준다.
 * @param class_name
 *  bc_key_event(".input_only_bc_cls");
 *  bc_key_event("#input_only_bc_cls");
 */
export function bc_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){ // $(class_name).each(function(){
        const classes = element.classList;
        if ( ! classes.contains("only_bc_cls") ) {
            element.addEventListener("keyup",function(e) {
                e.target.value = string_to_bc_change(e.target.value);
            });
            element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
                e.target.value = string_to_bc_change(e.target.value);
            });
            element.classList.add("only_bc_cls");
        }

        element.style.textAlign = "right";
    });
}
// 소수점 한자리 or 두자리 ( 8.2 , 8.4 , 8.6 , 8.8 , 7.25 , 8.85 , 8.90 )
export function string_to_bc_change(input_string) {
    let number_only_string = input_string.replace(/[^0-9]/g, '').substr(0,3);
    if (Number(number_only_string) === 0){ // focusout 일때만 체크.
        return '';
    } else if (number_only_string.length === 2) { // 2자리
        return String(Number(number_only_string.substr(0, 1))) + '.' + number_only_string.substr(1, 1);
    } else if (number_only_string.length === 3) { // 3자리
        return String(Number(number_only_string.substr(0, 1))) + '.' + number_only_string.substr(1, 2);
    } else {
        return number_only_string;
    }
}

/**
 * html 에서 id/class 값을 체크하여 DIA 값으로 변경해 준다.
 * @param class_name
 *  dia_key_event(".input_only_dia_cls");
 *  dia_key_event("#input_only_dia_cls");
 */
export function dia_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        const classes = element.classList;
        if ( ! classes.contains("only_dia_cls") ) {
            element.addEventListener("keydown", function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }
                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup", function (e) {
                e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 (2023-01-05)

                e.target.value = string_to_dia_change(e.target.value);

                // Arrow Key Event
                const arrow_key_value = Number(g_nvl(e.target.value,"0"));
                if (isNaN(arrow_key_value)) { // 숫자가 아닌경우
                    return;
                }
                if (e.keyCode === 38) { // UP Arrow Key +5
                    e.target.value = arrow_key_value + 5;
                    if (Number(e.target.value) > 99) {
                        e.target.value = 99;
                    }
                } else if (e.keyCode === 40) { // DOWN Arrow Key -5
                    e.target.value = arrow_key_value - 5;
                    if (Number(e.target.value) <= 0) {
                        e.target.value = 0;
                    }
                } else { // else Key
                    return;
                }
            });
            element.addEventListener("blur", function (e) { // focusout 대신 blur 를 사용해야 한다.
                e.target.value = string_to_dia_change(e.target.value);
            });
            element.classList.add("only_dia_cls");
        }

        element.style.textAlign = "right";
    });
}
// 소수점 한자리 ( 5, 55, 5.5, 55.5 )
export function string_to_dia_change(input_string) {
    let filter_string = input_string.replace(/[^0-9.]/g, '').substr(0,3);
    let number_only_string = input_string.replace(/[^0-9]/g, '').substr(0,3);
    if (Number(number_only_string) === 0) { // focusout 일때만 체크.
        return '';
    } else if (filter_string.length === 2) { // 2자리
        return filter_string;
    } else if (filter_string.length === 3 && number_only_string.length === 3) { // 3자리 : 555
        return String(Number(number_only_string.substr(0, 2))) + '.' + number_only_string.substr(2, 1);
    } else if (filter_string.length === 3 && number_only_string.length === 2) { // 3자리 : 55. 이거나 5.5
        return filter_string;
    } else { // 1자리 숫자 : filter_string.length === 1 && number_only_string.length === 1
        return number_only_string;
    }
}

/**
 * html 에서 id/class 값을 체크하여 RD 값으로 변경해 준다.
 * @param class_name
 *  dia_key_event(".input_only_rd_cls");
 *  dia_key_event("#input_only_rd_cls");
 */
export function rd_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        element.maxLength = 3;
        const classes = element.classList;
        if ( ! classes.contains("only_rd_cls") ) {
            element.addEventListener("keydown", function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }
                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup", function (e) {
                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // 한글입력 제외 (2023-01-05)

                e.target.value = string_to_rd_change(e.target.value);

                // Arrow Key Event
                const arrow_key_value = Number(g_nvl(e.target.value,"0"));
                if (isNaN(arrow_key_value)) { // 숫자가 아닌경우
                    return;
                }
                if (e.keyCode === 38) { // UP Arrow Key +10
                    e.target.value = arrow_key_value + 10;
                    if (Number(e.target.value) > 999) {
                        e.target.value = 999;
                    }
                } else if (e.keyCode === 40) { // DOWN Arrow Key -10
                    e.target.value = arrow_key_value - 10;
                    if (Number(e.target.value) <= 0) {
                        e.target.value = 0;
                    }
                } else { // else Key
                    return;
                }
            });
            element.addEventListener("blur", function (e) { // focusout 대신 blur 를 사용해야 한다.
                e.target.value = string_to_rd_change(e.target.value);
            });
            element.classList.add("only_rd_cls");
        }

        element.style.textAlign = "right";
    });
}
// 세자리수
export function string_to_rd_change(input_string) {
    const number_only_string = input_string.replace(/[^0-9]/g, '').substring(0,3);
    return number_only_string;
}

/**
 * html 에서 id/class 값을 체크하여 prism 값으로 변경해 준다.
 * @param class_name
 *  dia_key_event(".input_only_prism_cls");
 *  dia_key_event("#input_only_prism_cls");
 */
export function prism_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        const classes = element.classList;
        if ( ! classes.contains("only_prism_cls") ) {
            element.addEventListener("keydown", function (e) {
                // keydown 무시하는 keycode
                // backspace(8), tab(9), enter(13), shift(16), escape(27), Insert(45), Delete(46)
                // End(35), Home(36), Arrow Left(37), Arrow Up(38), Arrow Right(39), Arrow Down(40)
                // Ctrl + a(65) , c(67) , v(86) , z(90)
                const keydown_ignore_arr = [8, 9, 13, 16, 27, 45, 46];
                const keycode_ignore_check = (
                    keydown_ignore_arr.indexOf(e.keyCode) !== -1 || // $.inArray(e.keyCode, [8, 9, 13, 16, 27, 45, 46]) !== -1 ||
                    (e.keyCode >= 35 && e.keyCode <= 39) ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 90 && e.ctrlKey === true)
                );
                if ( keycode_ignore_check === true ) {
                    // console.log('keycode_ignore_check === true => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 : TAB일때 (2023-01-05)
                    return;
                }
                // keydown 허용하는 keycode
                // 0~9 ( keycode : 48 ~ 57 , number keycode : 96 ~ 105 )
                // - ( keycode : 109, 189 ) , + ( keycode : 107, 187 ) , . ( keycode : 110, 190 )
                const keydown_allow_arr = [109, 189, 107, 110, 190];
                const keycode_allow_check = (
                    keydown_allow_arr.indexOf(e.keyCode) !== -1 ||
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    (e.shiftKey && e.keyCode === 187) // SHIFT + 187 일때만 '+'
                );
                if ( keycode_allow_check === false ) {
                    // console.log('keycode_allow_check === false => (' + e.keyCode + ')');
                    e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 (2023-01-05)
                    e.preventDefault(); // 키보드가 입력을 막음
                }
            });
            element.addEventListener("keyup", function (e) {
                e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // 한글입력 제외 (2023-01-05)

                e.target.value = string_to_prism_change(e.target.value);

                // Arrow Key Event
                const arrow_key_value = Number(g_nvl(e.target.value,"0"));
                if (isNaN(arrow_key_value)) { // 숫자가 아닌경우
                    return;
                }

                if (e.keyCode === 38) { // UP Arrow Key +0.25
                    let result_value = (arrow_key_value + 0.25).toFixed(2);
                    if (Number(result_value) > 0) {
                        result_value = Number(result_value).toFixed(2);
                    }
                    e.target.value = result_value;
                } else if (e.keyCode === 40) { // DOWN Arrow Key -0.25
                    let result_value = (arrow_key_value - 0.25).toFixed(2);
                    if (Number(e.target.value) < 0) {
                        result_value = "";
                    }
                    e.target.value = result_value;
                } else { // else Key
                    return;
                }
            });
            element.addEventListener("blur", function (e) { // focusout 대신 blur 를 사용해야 한다.
                e.target.value = string_to_prism_change(e.target.value);
            });
            element.classList.add("only_prism_cls");
        }

        element.style.textAlign = "right";
    });
}
// 소수점 두자리 ( 5, 55, 5.5, 55.5, 5.55, 55.55 )
export function string_to_prism_change(input_string) {
    let filter_string = input_string.replace(/[^0-9.]/g, '').substr(0,5);
    return filter_string;
}

/**
 * html 에서 id/class 값을 체크하여 전화번호 형식을 체크
 * @param class_name
 *  phone_key_event(".input_only_phone_cls");
 *  phone_key_event("#input_only_phone_cls");
 */
export function phone_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        element.maxLength = 14;
        element.addEventListener("keydown",function(e) {
            e.target.value = string_to_phone_change( e.target.value );
        });
        element.addEventListener("keyup",function(e) {
            e.target.value = string_to_phone_change( e.target.value );
        });
        element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
            e.target.value = string_to_phone_change( e.target.value );
        });
    });
}
// 전화번호 형식 확인
export function string_to_phone_change(input_phone_number) {
    let only_number_string = input_phone_number.replace(/[^0-9]/g, '');
    let temp_number_string = input_phone_number.replace(/[^0-9-]/g, '');
    if ( Number(only_number_string.substr(0, 1)) !== 0 && Number(only_number_string.substr(0, 1)) !== 1) {
        return "";
    } else if ( only_number_string.substr(0, 2) === "02" ) {
        return only_number_string.replace(/^(\d{2})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    } else if ( only_number_string.length == 8 ) {
        return only_number_string.replace(/^(\d{4})(\d{4})$/, `$1-$2`);
    } else if ( only_number_string.length == 10 ||  only_number_string.length == 11 ) {
        return only_number_string.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    } else if (only_number_string.length == 12){
        return only_number_string.replace(/^(\d{4})(\d{4})(\d{4})$/, `$1-$2-$3`);
    } else {
        return temp_number_string;
    }
}

/**
 * html 에서 id/class 값을 체크하여 사업자번호 형식을 체크
 * @param class_name
 *  business_license_key_event(".input_only_business_license_cls");
 *  business_license_key_event("#input_only_business_license_cls");
 */
export function business_license_key_event(class_name) {
    document.querySelectorAll(class_name).forEach(function( element ){
        element.maxLength = 12;
        element.addEventListener("keydown",function(e) {
            e.target.value = string_to_business_license_change( e.target.value );
        });
        element.addEventListener("keyup",function(e) {
            e.target.value = string_to_business_license_change( e.target.value );
        });
        element.addEventListener("blur",function(e) { // focusout 대신 blur 를 사용해야 한다.
            e.target.value = string_to_business_license_change( e.target.value );
        });
    });
}
// 사업자번호 형식 확인
export function string_to_business_license_change(input_business_license){
    let only_number_string = input_business_license.replace(/[^0-9]/g, '');
    let temp_number_string = input_business_license.replace(/[^0-9-]/g, '');
    if ( only_number_string.length === 10) {
        return only_number_string.replace(/^(\d{3})(\d{2})(\d{5})$/, `$1-$2-$3`);
    } else {
        return temp_number_string;
    }
}

/**
 * 안경도수 변환 함수
 * @param data
 * @returns {{CYL: (string|*), SPH: (string|*), AXIS: (string|*)}}
 */
export function diopter_convert(data) {
    let after_sph = Number(g_nvl(data.SPH,0)) + Number(g_nvl(data.CYL,0)) + Number(g_nvl(data.ADD,0)) ;
    after_sph = after_sph > 0 ? "+" + after_sph.toFixed(2) : after_sph.toFixed(2);
    let after_cyl = Number(data.CYL) * -1 > 0 ? "+" + Number(data.CYL * -1).toFixed(2) : Number(data.CYL * -1).toFixed(2);
    let after_axis = Number(data.AXIS) > 90 ? Number(data.AXIS) - 90 : Number(data.AXIS) + 90;
    return {
        SPH: string_to_diopter_change(after_sph),
        CYL: string_to_diopter_change(after_cyl),
        AXIS: string_to_axis_change(String(after_axis))
    };
}

// /**
//  * 셀렉트박스 내용을 만들어주는 함수
//  * @param select_obj : object 이름
//  * @param select_value : value 셀렉트박스의 값
//  * @param select_name : name 셀렉트박스의 이름
//  * @param selector_id : selector_name javascript id 나 class 이름
//  * @param option_string : string 시작값 문구 ( ex. 선택, 전체 )
//  * 예)
//  selectbox_option_add(select_offer_group_obj,"OFFER_GROUP_NO","OFFER_GROUP_NAME","#select_offer_group_no", "전체");
//  selectbox_option_add(select_offer_region_obj,"REGION_NO","REGION_NAME","#select_offer_region_no", "전체");
//  selectbox_option_add(select_offer_admin_obj,"ADMIN_NO","ADMIN_NAME","#select_offer_admin_no", "전체");
//  */
// export function selectbox_option_add(select_obj,select_value,select_name,selector_id, option_string = "선택") {
//     let html = "<option value=''>"+ option_string +"</option>";
//     select_obj.forEach(function(item){
//         html += "<option value='"+item[select_value]+"'>"+item[select_name]+"</option>";
//     });
//     $(`${selector_id}`).html(html);
// }

/**
 * 배열 성공/실패 건수 계산하는 함수 (오라클, mysql 같이 사용 가능)
 * @param array_result
 * @param result_count
 * @returns {{fail: number, total: number, success: number}}
 */
export function request_array_dml_summary(array_result,result_count = 2){
    let success_count = 0;
    let success_index = [];
    let fail_count = 0;
    let fail_index = [];
    let total_count = 0;
    if ( result_count == 2 ) {
        array_result.forEach(function(item, index){
            // console.log("item" ,item);
            // array_result를 반복할 때 item이 배열일 경우에는 mySql 버전
            // array_result를 반복할 때 item이 객체일 경우에는 오라클 버전
            if(Array.isArray(item)) {
                if(item[0][0].O_RESULT == "0" || item[1][0].O_RESULT == "0") {
                    success_count++;
                    success_index.push(index);
                } else {
                    fail_count++;
                    fail_index.push(index);
                }
                total_count++;
            }else {
                if(item.out1 == "1" && item.out2 == "0") {
                    success_count++;
                    success_index.push(index);
                } else {
                    fail_count++;
                    fail_index.push(index);
                }
                total_count++;
            }
        });
    } else if ( result_count == 3) {
        array_result.forEach(function(item, index){
            if(Array.isArray(item)) {
                if(item[2][0].O_RESULT == "0") {                // 2023-03-06 result_count가 3인 경우는 아직 못봐서 테스트는 못함
                    success_count++;
                    success_index.push(index);
                } else {
                    fail_count++;
                    fail_index.push(index);
                }
                total_count++;
            } else {
                if(item.out2 == "1" && item.out3 == "0") {
                    success_count++;
                    success_index.push(index);
                } else {
                    fail_count++;
                    fail_index.push(index);
                }
                total_count++;
            }
        });
    }
    return {
        total: total_count,
        success: success_count,
        fail: fail_count,
        s_index: success_index,
        f_index: fail_index,
        row_data: array_result
    };
}

export function find_object_key(obj, key, value, name){
    if( value === null || value === undefined ) {
        return {[name]: ""}; // 찾는 값이 null 이면, [name]: "" 을 반환.
    } else {
        const node = obj.filter( (data) => data[key] == value );
        return (node.length === 0) ? {[name]: ""} : node[0];
    }
}

/** 이모티콘 정규식 (자동으로 빼주기) */
export function remove_emojis(value) {
    const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u2604]|[\u2607-\u2609]|[\u2610-\u2619]|[\u2620-\u2659]|[\u2671-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return value.replace(regex, '');
}

/** 이모티콘 정규식 (검증해서 알려주기) */
export function g_validate_emojis(value) {
    const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u2604]|[\u2607-\u2609]|[\u2610-\u2619]|[\u2620-\u2659]|[\u2671-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return regex.test(value);
}

/**
 * retina_common.js가 생기면 이동될 함수
 * SPH, CYL은 정렬할 때 0, 음수, 양수 순서대로 나오게끔 sort
 * @param sph
 * @returns {number}
 */
export function diopter_sort(diopter) {
    if( Number(diopter) === 0 ) {
        return 0;
    } else if ( Number(diopter) < 0 ) {
        return Number(diopter) * -100;
    } else {
        return Number(diopter) * 10000;
    }
}

// export async function get_firebase_token(){
//     try {
//         const dbPromise = openDB('retina-admin')
//         return g_nvl((await (await dbPromise).get('firebase-token', "token")));
//     }catch (e){
//         console.log(e)
//         return "";
//     }
// }
