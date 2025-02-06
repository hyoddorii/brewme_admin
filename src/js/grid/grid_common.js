/******************************************************************
 * AG-GRID
 ******************************************************************/
import {g_nvl, uc} from "../common/hebees_common.js";

/**
 * AG-GRID 특정값을 위치를 찾아주는 함수
 * @param grid
 * @param column
 * @param value
 * @param start_with
 * @returns {number}
 */
export function find_grid_index(grid, column, value, start_with = 0){
    let index = -1;
    grid.api.forEachNode( function (node, i) {
        if (node.data[column] == value && i >= start_with && index == -1) {
            index = Number(i);
        }
    });
    return index;
}

/**
 * AG-GRID valueFormatter 옵션 - number_formatter
 * 목적 : 끝에서 세자리 수마다 콤마(,) 찍어준다.
 * @param params
 * @returns {string}
 * 예) 1234567 => 1,234,567
 */
export function number_formatter(params) {
    if(typeof params.value != 'undefined') {
        return Math.floor(params.value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
}

/**
 * AG-GRID 컬럼 [맞춤], [펼침]
 * @param element
 * @param grid_options
 * 예)
 function grid_autosize(){
        grid_column_autosize(this, chain_grid_options)
    }
 */
export function grid_column_autosize(element,grid_options) {
    // dataset.type 로 확인 하며 data-type 로 맞춰 사용해야 합니다
    if(element.dataset.type == "full") {
        let all_column_ids = [];
        grid_options.columnApi.getColumns().forEach(function(column) {
            all_column_ids.push(column.colId);
        });
        grid_options.columnApi.autoSizeColumns(all_column_ids);
        element.dataset.type = "fit";
        element.innerText = "▶ 맞춤 ◀";
    }else{
        element.dataset.type = "full";
        grid_options.api.sizeColumnsToFit();
        element.innerText = "◀ 펼침 ▶";
    }
}

/**
 * AG-GRID 컬럼 [맞춤], [펼침] 설정에 따른 컬럼 맞춰서 보여주기
 * @param element
 * @param grid_options
 * 예)
 *  grid_options.api.setRowData(result.out1);
 *  grid_column_size_by_type($("#btn_grid_size"), grid_options);
 */
export function grid_column_size_by_type(element,grid_options) {
    if(element.data("type") == "full") {
        grid_options.api.sizeColumnsToFit();
    }else{
        let all_column_ids = [];
        grid_options.columnApi.getAllColumns().forEach(function(column) {
            all_column_ids.push(column.colId);
        });
        grid_options.columnApi.autoSizeColumns(all_column_ids);
    }
}

/**
 * grid 를 값에 맞춰준다 (full)
 * @param grid_options
 * 예) grid_column_full(grid_options);
 */
export function grid_column_full(grid_options) {
    let all_column_ids = [];
    grid_options.columnApi.getAllColumns().forEach((column) => all_column_ids.push(column.colId) );
    grid_options.columnApi.autoSizeColumns(all_column_ids);
}

/**
 *
 * @param name
 * @param grid_options
 * @param grid_column
 * @returns {boolean}
 * 예) 브랜드에 "강동구청" 이 있을때,
 grid_column_name_duplicate_check("강동구청",tree_grid_options,"BRAND_NAME","BRAND_NO",93); // true
 grid_column_name_duplicate_check("가로수길",tree_grid_options,"BRAND_NAME","BRAND_NO",93); // false
 */
export function grid_column_name_duplicate_check(name,grid_options,grid_column,except_column,except_value){
    // console.log(name + " " + except_column + " " + except_value);
    let is_duplicate = false;
    grid_options.api.forEachNode(function(node){
        if( g_nvl(node.data[grid_column],"") !== "" ) {
            if( name == node.data[grid_column] && node.data[except_column] != g_nvl(except_value,"") ) is_duplicate = true;
        }
    });
    return is_duplicate;
}

/**
 * 그리드 합계 함수
 * 그리드 마다 합계 항목이 다르므로
 * 그리드 ID로 구분하여 필요한 값을 셋팅한다.
 * 예) grid_bottom_total_sum(grid_options, grid_bottom);
 */
export function grid_bottom_total_sum(params, bottom_data, except_name = "총합계") {
    //객체 깊은 복사
    let temp_data = JSON.parse(JSON.stringify(bottom_data));
    params.api.forEachNodeAfterFilter(function(rowNode) {
        if(g_nvl(rowNode.data, "") != "") {     // 그룹화 했을 때를 위해서
            for (let key in temp_data[0]) {
                if (temp_data[0][key] !== except_name) {
                    temp_data[0][key] += parseFloat(uc(rowNode.data[key]));
                }
            }
        }
    });
    params.api.setPinnedBottomRowData(temp_data);
}

// /**
//  * 특정컬럼의 값을 찾아준다.
//  * @param grid
//  * @param column
//  * @param value
//  * @param start_with
//  * @returns {{}}
//  * 예) let data = find_grid_node(tree_grid_options,"PRODUCT_NO",1714);
//  */
// function find_grid_node(grid, column, value, start_with = 0){
//     let find_data = {};
//     grid.api.forEachNode( function (node, i) {
//         if (node.data[column] == value && i >= start_with ) {
//             find_data = node.data;
//         }
//     });
//     // console.log("find_data",find_data);
//     return find_data;
// }
