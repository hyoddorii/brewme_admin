/**
 * 목적 : ag-grid 내에 셀 이벤트 처리
 * 함수
 *  init()
 : rendering 되기 전에 초기화, 속성정의, CSS변경, event_function 호출
 : 필수값
 *  event_function() 또는 handler()
 : init() 함수에 필요시 호출
 : 화면처리 등 상황에 따라 생략도 가능.
 *  refresh()
 : event_function를 통해 값이 변경되면 refresh가 실행되어, cell의 값이 변경됨에 따라 event를 줄 수 있다.
 : 필수값
 *  getGui()
 : init() 에서 선언한 eGui 를 event_function() 동작에 따라서 화면에 적용시킨다.
 : 필수값
 * [참고] 새로고침
 (방법1) rowNode.setDataValue : 값 설정을 직접 변경하여 보여줌
 (방법2) refresh : 데이타 변경시 다른 내용을 호출하기 위해서 사용
 * [비고]
 * toggle 등 CSS 관련된 내용은 /hebees/css/grid/grid_class.css 에 기본값 적용
 */

// import AirDatepicker from "air-datepicker";
// import locale_ko from "../libs/air-datepicker/ko.js";
// import dayjs from "dayjs";

/**
 * 이벤트 : ag-grid checkbox renderer
 * 참고 : https://www.notion.so/eternalglee/checkbox-0457542418a548f6be47d3f24131ec1a
 * 예제 :
 *
 * function card_type_grid_options_init() {
 *     // check_box params
 *     const checkbox_renderer_params= {
 *     inner_html: `<input type="checkbox" class="input_check_box_cls">`,
 *     add_class: ".input_check_box_cls",
 *   };
 * const column_defs = [
 *      {
 *     headerName: "옵션 자동호출",
 *     headerTooltip: "옵션 자동호출",
 *     field: "IS_UNIT",
 *     width: 60,
 *     cellRenderer: grid_checkbox_renderer_class,
 *     cellRendererParams: checkbox_renderer_params,
 *   },
 *  ];
 * };
 *
 *
 * aggrid_checkbox 이전 네이밍 확인후 삭제 예정
 */
export class grid_checkbox_renderer_class {
    init(params) {
        // ag-grid에 선택된 정보
        this.params = params;

        this.eGui = document.createElement("div");
        this.eGui.style.cssText= `display:flex; align-items:center; justify-content:center; width: 100%; height:100%;`;
        this.eGui.innerHTML = params.inner_html;

        this.textbox = this.eGui.querySelector(params.add_class);
        this.textbox.checked = Number(params.value == 1);

        // 체크박스 이벤트 처리
        this.checked_handler = this.checked_handler.bind(this); //bind를 통해 checked_handler와 연결해줍니다.
        this.textbox.addEventListener("change", this.checked_handler);
    }

    // 체크박스 클릭시 호출되는 method
    checked_handler(e) {
        const checked = e.target.checked ? 1 : 0; // true false 처리로 변경 되는지 확인하기
        const col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, checked); // col_id 값에 checked 값을 넣어준다.
    }
    refresh() {
        return true;
    }
    getGui() {
        return this.eGui;
    }
}

export class grid_radio_renderer_class {
    init(params) {
        // ag-grid에 선택된 정보
        this.params = params;

        this.eGui = document.createElement("div");
        this.eGui.style.cssText = `display:flex; align-items:center; justify-content:center; width: 100%; height:80%;`;
        this.eGui.innerHTML = params.inner_html;

        this.radiobox = this.eGui.querySelector(params.add_class);
        this.radiobox.checked = Number(params.value == 1);

        //버튼에 add EventListener
        this.eventListener = () => params.function_name(params.node.id);
        this.radiobox.addEventListener('change', this.eventListener);
    }
    checked_handler() {
        const checked = e.target.checked ? 1 : 0; // true false 처리로 변경 되는지 확인하기
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, checked);
    }
    getGui() {
        return this.eGui;
    }
    refresh() {
        return true;
    }
}

export class grid_radio2_renderer_class {
    init(params) {
        // ag-grid에 선택된 정보
        this.params = params;

        this.eGui = document.createElement("div");
        this.eGui.style.cssText = `display:flex; align-items:center; justify-content:center; width: 100%; height:80%;`;
        this.eGui.innerHTML = params.inner_html;

        this.radiobox = this.eGui.querySelector(params.add_class);
        this.radiobox.checked = Number(params.value == 1);

        //버튼에 add EventListener
        this.eventListener = () => params.function_name(params.data, params.value);
        this.radiobox.addEventListener('change', this.eventListener);
    }
    checked_handler() {
        const checked = e.target.checked ? 1 : 0; // true false 처리로 변경 되는지 확인하기
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, checked);
    }
    getGui() {
        return this.eGui;
    }
    refresh() {
        return true;
    }
}


/**
 * 이벤트 : ag-grid button renderer
 * 참고 : https://www.notion.so/eternalglee/button-45e1d04e62804b17bd89a6c06ac2341f
 *
 * grid_option 에 context 를 추가 하여 cellrenderer 를 사용 할수 있습니다
 * function card_type_grid_options_init() {
 *    // btn_delete params
 *     const delete_btn_renderer_params= {
 *         inner_html: `<button class="btn_delete btn btn_red">삭제</button>`,
 *         add_class: ".btn_delete",
 *         function_name : delete_product_type,
 *     };
 *
 * const column_defs = [
 *    {
 *     headerName: "삭제",
 *     field: "UPDATE",
 *     width: 40,
 *     cellRenderer: grid_button_renderer_class,
 *     cellRendererParams: delete_btn_renderer_params,
 *    },
 *  ];
 * };
 *
 * init(params) 렌더러를 사용하기 전에 한 번 호출됩니다.
 * getGui() *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
 * refresh() 셀이 새로 고쳐질때 마다 실행됩니다
 * grid_button_renderer
 */

export class grid_button_renderer_class {
    //init = 렌더러를 사용하기 전에 한 번 호출됩니다.
    init(params) {
        this.params = params;

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eButton = this.eGui.querySelector(params.add_class);

        //버튼에 add EventListener
        this.eventListener = () => params.function_name(params.node.id);
        this.eButton.addEventListener('click', this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

export class grid_button2_renderer_class {
    //init = 렌더러를 사용하기 전에 한 번 호출됩니다.
    init(params) {
        this.params = params;

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eButton = this.eGui.querySelector(params.add_class);

        //버튼에 add EventListener
        this.eventListener = () => params.function_name(params.data, params.value, params.node);
        this.eButton.addEventListener('click', this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

/**
 * 이벤트 : ag-grid toggle_text renderer
 * 참고 : https://www.notion.so/eternalglee/toggle_text-d291afd6998f483e8f6395673a77e444
 *
 * 예제 :
 * function card_type_grid_options_init() {
 *    // input toggle params
 *     const text_toggle_renderer_params = {
 *         inner_html: `<input type="button" class="input_toggle_with_text_cls"/>
 *             <label for="input_toggle_with_text_cls"></label>`,
 *         add_class: `.input_toggle_with_text_cls`,
 *     };
 * const column_defs = [
 *    {
 *     headerName: "상태",
 *     field: "STATUS",
 *     width: 60,
 *     cellRenderer: grid_text_toggle_renderer_class,
 *     cellRendererParams: text_toggle_renderer_params,
 *    },
 *  ];
 * };
 *
 *
 * aggrid_toggle_with_text
 */
export class grid_toggle_text_renderer_class {
    init(params) {
        this.params = params;

        this.eGui = document.createElement("div");
        this.eGui.style.cssText = `display:flex; align-items:center; justify-content:center;`;
        //input type이 checkbox일땐 정상적으로 checkbox handler가 되지 않는다
        this.eGui.innerHTML = params.inner_html;

        this.select_toggle = this.eGui.querySelector(params.add_class);
        // params.value 은 toggle의 값 (1:사용,0:미사용)
        params.value == 1 ? this.select_toggle.classList.add("active") : null;

        this.checked_handler = this.checked_handler.bind(this); // bind를 통해 checked_handler와 연결
        this.eGui.addEventListener("click", this.checked_handler); // click 이벤트 적용
    }

    checked_handler() {
        let on_off = this.params.value; // 값을 on_off 에 담아둔다.
        let change_on_off = (on_off==1) ? 0 : 1 ; // toggle에 따라서 값을 반대로 변경해준다.

        this.select_toggle.classList.toggle("active"); // toggle 에 class 를 변경해준다.

        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, change_on_off); // col_id 값에 on_off 값을 넣어준다.
    }
    refresh() {
        return true;
    }
    getGui() {
        return this.eGui;
    }
}

/**
 * 이벤트 : 컬럼 항목 앞에 이미지 추가하기 (현재는 TREE 구현시 사용)
 * 참고 :  https://www.ag-grid.com/javascript-data-grid/component-cell-renderer/
 *
 * aggrid_tree_icon
 */
export class grid_tree_icon_renderer_class {
    init(params) {
        const temp_div = document.createElement('div');
        const value = params.value;
        const icon = this.tree_depth_icon(params.data.TREE_DEPTH);
        const span_html = `<span> <img src="${icon}" style="vertical-align: sub;"> <span class="filename"></span>${value}</span>`;
        temp_div.innerHTML = icon ? span_html :value;
        this.eGui = temp_div.firstChild;
    }

    // [TREE] Depth 에 따라서 이미지 선택하는 함수
    tree_depth_icon(depth) {
        if (depth == '1') { // BRAND
            return "/assets/icons/icon_file_yellow.svg";
        } else if (depth == '2') { // PRODUCT
            return "/assets/icons/icon_file_background_color_green.svg";
        }
    }
    refresh() {
        return true;
    }
    getGui() {
        return this.eGui;
    }

}

/**
 * 이벤트 : ag-grid input_text renderer
 * 참고 : https://www.notion.so/eternalglee/input_text-ab9056d0bf3744f38200454c208a6e77
 * 예제 :
 * function card_type_grid_options_init() {
 *    // input text params
 *     const text_input_renderer_params= {
 *         inner_html: `<input type="text" class="input_grid_cls">`,
 *         add_class: `.input_grid_cls`,
 *     };
 * const column_defs = [
 *    {
 *     headerName: "상품구분명",
 *     field: "PRODUCT_TYPE_NAME",
 *     editable: (params) => {
 *         return params.node.rowPinned !== "top";
 *     },
 *     cellRendererSelector: (params) => {
 *         if (params.node.rowPinned) {
 *             return {
 *                 component: grid_text_input_renderer_class,
 *                 params: text_input_renderer_params,
 *             };
 *         }
 *     },
 *    },
 *  ];
 * };
 *
 * grid_input_text_class
 */
export class grid_input_text_renderer_class {
    init(params) {
        this.params = params;

        // params.value = "";
        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.style.cssText= `width: 100%; height:90%; display: flex; align-items: center;`;
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eInput = this.eGui.querySelector(params.add_class);
        this.eInput.value = params.value;  //cellEditorSelector사용해 ag_grid cell을 수정할 때 현재 값을 가져오기 위함.
        this.checked_handler = this.checked_handler.bind(this); //bind를 통해 checked_handler와 연결해줍니다.
        this.eInput.addEventListener("change", this.checked_handler); // input 에 add EventListener
    }

    // bind 한 checked_handler
    checked_handler() {
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, this.eInput.value);
    }
    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }
    //특정 rowNode(행)의 열 값을 가져옵니다.
    getValue() {
        return this.eInput.value; //cellEditorSelector사용할때 값을 가져오기 위함
    }
    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

/**
 * 이벤트 : ag-grid input_number renderer
 * 참고 : https://www.notion.so/eternalglee/input_number-a153ef277aa245fd972d30e5b54b2906
 * 예제 :
 * function card_type_grid_options_init() {
 *    // input number params
 *     const number_input_renderer_params= {
 *         inner_html: `<input type="text" class="input_grid_cls">`,
 *         add_class: `.input_grid_cls`,
 *     };
 *
 * const column_defs = [
 *    {
 *    headerName: "노출 순서",
 *     field: "ORDER_NO",
 *     width: 45,
 *     cellEditorSelector: (params) => {
 *         return {
 *             component: grid_number_input_renderer_class,
 *             params: number_input_renderer_params,
 *         };
 *     },
 *     editable: (params) => {
 *         return params.node.rowPinned !== "top";
 *     },
 *     cellRendererSelector: (params) => {
 *         if (params.node.rowPinned) {
 *             return {
 *                 component: grid_number_input_renderer_class,
 *                 params: number_input_renderer_params,
 *             };
 *         }
 *     },
 *    },
 *  ];
 * };
 *

 *
 */
export class grid_input_number_renderer_class {
    init(params) {
        this.params = params;

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.style.cssText= `width: 100%; height:90%;`;
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eInput = this.eGui.querySelector(params.add_class);

        this.eInput.value = params.value;  //cellEditorSelector사용해 ag_grid cell을 수정할 때 현재 값을 가져오기 위함.

        // 숫자만 입력
        this.eInput.onkeyup = function(e) {
            this.value=this.value.replace(/[^-0-9]/g,'');
        }

        this.checked_handler = this.checked_handler.bind(this); // bind를 통해 checked_handler와 연결해줍니다.
        this.eInput.addEventListener("change", this.checked_handler); // input 에 add EventListener
    }
    // bind 한 checked_handler
    checked_handler() {
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, this.eInput.value);
    }
    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    //특정 rowNode(행)의 열 값을 가져옵니다.
    getValue() {
        return this.eInput.value; //cellEditorSelector사용할때 값을 가져오기 위함
    }
    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }

}

export class grid_input_color_renderer_class {
    init(params) {
        this.params = params;

        // params.value = "";

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.style.cssText= `width: 100%; height:90%; display: flex; align-items: center;`;
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eInput = this.eGui.querySelector(params.add_class);
        this.eInput.value = params.value;  //cellEditorSelector사용해 ag_grid cell을 수정할 때 현재 값을 가져오기 위함.
        this.checked_handler = this.checked_handler.bind(this); //bind를 통해 checked_handler와 연결해줍니다.
        this.eInput.addEventListener("change", this.checked_handler); // input 에 add EventListener
    }

    // bind 한 checked_handler
    checked_handler() {
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, this.eInput.value);
    }
    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }
    //특정 rowNode(행)의 열 값을 가져옵니다.
    getValue() {
        return this.eInput.value; //cellEditorSelector사용할때 값을 가져오기 위함
    }
    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

/**
 * 이벤트 : ag-grid selectbox renderer
 * 참고 : https://www.notion.so/eternalglee/selectbox-5713d60896e24ab8bed43bc592e29995
 * 예제 :
 * function card_type_grid_options_init() {
 *    // select_box params
 *     const selectbox_renderer_params = {
 *         inner_html: `<select class="grid_selectbox_cls">
 *             <option value="1">수정가능</option>
 *             <option value="0">조회만</option>
 *         </select>`,
 *         add_class: ".grid_selectbox_cls"
 *     }
 * const column_defs = [
 *    {
 *     headerName: `가맹점 상품수정권한`,
 *     field: "IS_ADD_PRODUCT",
 *     width: 80,
 *     cellRenderer: grid_selectbox_renderer_class,
 *     cellRendererParams: selectbox_renderer_params,
 *    },
 *  ];
 * };
 *
 *
 */
export class  grid_selectbox_renderer_class {
    init(params) {
        this.params = params;

        this.eGui = document.createElement("div");
        // this.eGui.style.cssText= `width: 100%; height:90%;`;
        this.eGui.innerHTML = params.inner_html; // selectbox 를 그리는 html

        this.selectbox = this.eGui.querySelector(params.add_class); // selectbox 선언된 id
        this.selectbox.value = params.value;

        this.checked_handler = this.checked_handler.bind(this); //bind를 통해 checked_handler와 연결해줍니다.
        this.selectbox.addEventListener("change", this.checked_handler);
    }

    // bind 한 checked_handler
    checked_handler() {
        let col_id = this.params.column.colId;
        this.params.node.setDataValue(col_id, this.selectbox.value);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

export class grid_selectbox_option_renderer_class {
    init(params) {
        this.params = params;

        this.eGui = document.createElement("div");
        this.eGui.style.cssText= `width: 100%; height:90%;`;
        this.eGui.innerHTML = params.inner_html; // selectbox 를 그리는 html

        this.selectbox = this.eGui.querySelector(params.add_class); // selectbox 선언된 class
        this.option_btn = this.eGui.querySelector(params.option_add_class);

        this.eventListener = () => params.option_function_name(params.data, params.value, params.node.id);
        this.option_btn.addEventListener('click', this.eventListener);

        this.eventListener = () => params.function_name(params ,this.selectbox.value);
        this.selectbox.addEventListener('change', this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

/**
 * 이벤트 : ag-grid checkbox header
 * 참고 : https://www.notion.so/eternalglee/selectbox-5713d60896e24ab8bed43bc592e29995
 * 예제 :
 * function card_type_grid_options_init() {
 *    // select_box params
 *     const header = {
            header_name:"text",
            add_class: "input_type",
            header_function: grid_header_checked
        }
 * const column_defs = [
        {
            headerComponent: grid_header_checkbox_class,
            field: "CASH_AMOUNT",
            context: header,
            cellClass: "text_right",
            valueFormatter: number_formatter
        }
 *  ];
 * };
 *
 *
 */
export class grid_header_checkbox_class {
    init(params) {

        this.eGui = document.createElement("label");
        this.eGui.classList = "label_radio_box";
        this.eGui.innerHTML = `<input type="checkbox" class="${params.add_class}" value="${params.value}">${params.header_name}`

        this.checkbox = this.eGui.querySelector("." + params.add_class);

        //버튼에 add EventListener
        this.eventListener = () => params.header_function(this.checkbox);
        this.checkbox.addEventListener("change",  this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return false;
    }
}

/**
 * 이벤트 : ag-grid button header
 * 예제 :
 * function card_type_grid_options_init() {
 *     const delete_all_row = {
 *          inner_html: `<button class="btn_grid btn_orange btn_delete_all_cls">-</button>`,
 *          add_class: `.btn_delete_all_cls`,
 *          header_function: on_click_delete_row_all,
 *     }
 *     const column_defs = [
 *          {
 *              headerComponent: grid_header_button_class,
 *              headerComponentParams: delete_all_row,
 *              field: "DELETE",
 *              cellClass: "text_center",
 *              cellRendererSelector: function(params) {
 *                  return {
 *                      component: grid_button_renderer_class,
 *                      params: delete_btn_renderer_params,
 *                         };
 *              },
 *          },
 *     ];
 * };
 */
export class grid_header_button_class {
    init(params) {

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eButton = this.eGui.querySelector(params.add_class);

        //버튼에 add EventListener
        this.eventListener = () => params.header_function(params.eButton);
        this.eButton.addEventListener('click', this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return false;
    }
}

/**
 * 이벤트 : ag-grid selectbox renderer
 * 참고 : https://www.notion.so/eternalglee/selectbox-5713d60896e24ab8bed43bc592e29995
 * 예제 :
 * const datepicker_renderer_params = {
 *   dateFormat: "yyyy-MM-dd",
 *   dayjs_format: "YYYY-MM-DD HH:mm",
 *   timepicker: ".grid_selectbox_cls",
 * }
 * const column_defs = [
 *    {
 *     headerName: "등록날짜",
 *     field: "ORDER_DT",
 *     width: 80,
 *     cellRenderer: grid_datepicker_renderer_class
 *    },
 *  ];
 * };
 *
 *
 */
// export class grid_datepicker_renderer_class {
//     init(params) {
//         if(params.node.rowPinned == "bottom"){return}

//         this.eGui = document.createElement('input');
//         this.eGui.value = dayjs(params.value).format(params.dayjs_format);
//         this.eGui.style.height = '100%';
//         this.eGui.style.width = '-webkit-fill-available';
//         this.eGui.style.background = "transparent";
//         this.eGui.style.outline = 'none';
//         this.eGui.style.border = 'none';


//         new AirDatepicker(this.eGui, {
//             locale: locale_ko,
//             dateFormat: params.dateFormat,
//             autoClose: true,
//             selectedDates: this.eGui.value,
//             timepicker: params.timepicker,
//             timeFormat: params.timeFormat,
//             position({$datepicker, $target, $pointer}) {
//                 let coords = $target.getBoundingClientRect(),
//                     dpWidth = $datepicker.clientWidth;

//                 let top = coords.y + 34;
//                 let left = coords.x - dpWidth/params.location;

//                 $datepicker.style.left = `${left}px`;
//                 $datepicker.style.top = `${top}px`;

//                 $pointer.style.display = 'none';
//             },
//             navTitles: {
//                 days: "<strong>등록일:</strong>&nbsp; yyyy / MMMM",
//             },
//             onRenderCell({date, cellType}) {
//                 /**
//                  * 그리드의 셀값 선택되게 하려고 selectedDates 옵션을 사용함
//                  * 현재 선택된 값 클릭시 날짜가 해제가 되면서 날짜값 없이 저장이 됨
//                  * 그래서 현재 렌더링 될때의 값은 선택못하게 막아둠
//                  */
//                 if (dayjs(date).format('YYYY-MM-DD') == dayjs(params.value).format('YYYY-MM-DD')) {
//                     return {
//                         disabled: true,
//                         classes: 'disabled-class'
//                     }
//                 }
//             },
//             onSelect({date,formattedDate,datepicker}) {
//                 if(formattedDate != undefined){
//                     params.node.setDataValue(params.colDef.field,formattedDate);
//                     // 이유는 모르겠지만...time 수정할때는 autoClose 작동안함
//                     if(datepicker.timepickerIsActive){
//                         datepicker.hide();
//                     }
//                 }
//             }
//         });
//     }

//     // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
//     getGui() {
//         return this.eGui;
//     }

//     // 셀이 새로 고쳐질때 마다 실행됩니다
//     refresh() {
//         return true;
//     }
// }

/**
 * 이벤트 : ag-grid img renderer
 * cellRendererSelector: function(params) {
 *    if (typeof params.data != "undefined" && g_nvl(params.data, "") != "") {
 *    let img_path = "/assets/images/offer/no_prod_Img.png"
 *    if(g_nvl(params.value, "") != "") img_path = params.value;
 *
 *    return {
 *      component: grid_img_renderer_class,
 *      params: {
 *          inner_html: `<img class="img_ddd_cls" src="${img_path}" style="width: 80px; height: 50px;">`,
 *          add_class: `.img_ddd_cls`,
 *          mouseover_function_name: on_mouseover_product_img,
 *          mousemove_function_name: on_mousemove_product_img,
 *          mouseout_function_name: on_mouseout_product_img,
 *      },
 *    }
 * },
 * }
 */
export class grid_img_renderer_class {
    //init = 렌더러를 사용하기 전에 한 번 호출됩니다.
    init(params) {
        this.params = params;

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.innerHTML = params.inner_html;
        this.eGui.style.display = "flex";
        this.eGui.style.alignItems = "center";
        this.eGui.style.justifyContent = "center";

        // elements 참조
        this.eButton = this.eGui.querySelector(params.add_class);

        //버튼에 add EventListener
        this.mouseover_eventListener = (e) => params.mouseover_function_name(params.data, params.value, params.node, e);
        this.mousemove_eventListener = (e) => params.mousemove_function_name(params.data, params.value, params.node, e);
        this.mouseout_eventListener = (e) => params.mouseout_function_name(params.data, params.value, params.node, e);
        this.eButton.addEventListener('mouseover', this.mouseover_eventListener);
        this.eButton.addEventListener('mousemove', this.mousemove_eventListener);
        this.eButton.addEventListener('mouseout', this.mouseout_eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}

export class grid_span_renderer_class {
    //init = 렌더러를 사용하기 전에 한 번 호출됩니다.
    init(params) {
        this.params = params;

        // 셀 만들기
        this.eGui = document.createElement("div");
        this.eGui.innerHTML = params.inner_html;

        // elements 참조
        this.eSpan = this.eGui.querySelector(params.add_class);

        //버튼에 add EventListener
        this.eventListener = () => params.function_name(params.node.id);
        this.eSpan.addEventListener('click', this.eventListener);
    }

    // *필수* 구성 요소의 DOM 요소를 반환하여 그리드의 셀에 넣습니다.
    getGui() {
        return this.eGui;
    }

    // 셀이 새로 고쳐질때 마다 실행됩니다
    refresh() {
        return true;
    }
}
