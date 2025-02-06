/******************************************************************
 * GRID 내에서 INSERT, UPDATE, DELETE 간단히 조작하도록 하는 공통함수.
 ******************************************************************/

import {g_nvl, g_nvl2} from "../common/hebees_common.js";

/**
 * 총 상품 갯수를 배송사관리 관리 옆에 붙여줌.
 */
export function show_sum(grid) {
    let toal_num = 0;
    grid.api.forEachNodeAfterFilter(() => toal_num++ );
    return toal_num;
}

/**
 * 중복값이 있는지 확인하고, 중복값에 is_duplicate를 넣어줌.
 */
export function same_value_check(grid, duplicate_check_grid_column) {
    let name_same_arr = [];
    grid.api.forEachNode(function(node) {
        let same_value  = grid_column_name_count(node, grid, duplicate_check_grid_column);  //이름이 같으면 담기는 배열
        node.is_duplicate = ( same_value.length > 0 ? true : false);  //중복여부
        if(same_value.length > 0){
            name_same_arr.push(node);
        }
    });
    return name_same_arr;
}

/**
 * ag-grid에 이름을 중복체크 후 뭐가 중복됐는지 반환
 * @param row
 * @param grid : 소스에서는 grid_options
 * @param grid_column
 * @returns {*[]}
 */
function grid_column_name_count(row, grid, grid_column) {
    let name_arr = [];  //중복된 이름이면 담길 arr

    grid.api.forEachNodeAfterFilter(function(node) {
        if(row.rowIndex !== node.rowIndex) { //같은 행 예외처리
            if (row.data[grid_column] == node.data[grid_column]) { //이름이 같을때
                name_arr.push(row);
            }
        }
    });
    return name_arr;
}

export function grid_duplicate_check(grid, grid_column){
    const result_name_arr = [];
    grid.api.forEachNode((node)=>{
        node.setDataValue("is_duplicate", false);
        if(result_name_arr.includes(node.data[grid_column])){
            grid.api.getDisplayedRowAtIndex(result_name_arr.indexOf(node.data[grid_column])).setDataValue("is_duplicate", true);
            node.setDataValue("is_duplicate", true);
        }
        result_name_arr.push(node.data[grid_column]);
    });
}

export function max_order_no(grid) {
    let max_no = 1;
    grid.api.forEachNode(function(node) {
            const node_no = g_nvl(node.data.ORDER_NO, 0);
            max_no = Number(node_no) + 1 > max_no ? Number(node_no) + 1 : max_no;
        }
    );
    return max_no;
}

export function min_no(grid, col_name) {
    let min_no = -1;
    grid.api.forEachNode(function(node) {
            const node_no = g_nvl2(node.data[col_name], 0);
            min_no = Number(node_no) - 1 < min_no ? Number(node_no) - 1 : min_no;
        }
    );
    return min_no;
}
