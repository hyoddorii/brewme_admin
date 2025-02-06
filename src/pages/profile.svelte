<style>
    .grid_container {
        width: 80%;
        height: 400px;
    }
    .div_container_cls {
        display: block;
    }
    .btn {
        padding: 6px 12px;
        margin: 5px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .btn_blue {
        background-color: #007bff;
        color: white;
    }
    .btn_gray {
        background-color: #6c757d;
        color: white;
    }
    .ag-theme-balham {
        height: calc(100vh - 200px);
        min-height: 200px;
        width: 100%;
    }
</style>

<div class="div_container_cls">
    <div class="div_header" style="display: flex; justify-content: space-between;">
        <div>
            &nbsp;매입처 / 수발주 관리&nbsp;( {ref_supplier_count} )
        </div>
        <div>
            <button on:click={fetch_supplier_list} class="btn btn_gray">새로고침</button>
        </div>
    </div>
    <div bind:this={ref_this_grid} class="ag-theme-balham grid_container"></div>
</div>

<script>
    import { onMount } from "svelte";
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-alpine.css";
    import { LicenseManager } from "ag-grid-enterprise";
    import { Grid } from "ag-grid-community";
    import { AG_GRID_LICENSE } from "../config/config";

    let ref_this_grid;
    let grid_options;
    let ref_this_grid_top;
    let ref_supplier_count = 0;

    let ref_grid_select_supplier_obj = {
        supplier_no: "",
        supplier_name: "",
        business_license: "",
        ceo_name: "",
        ceo_phone: "",
        manager_name: "",
        manager_phone: "",
        company_tel: "",
        company_fax: "",
        company_email: "",
        address_1: "",
        address_2: "",
        zipcode: "",
        status: "1",
        memo: "",
    };

    let g_admin_arr = [];
    let g_color_arr = [];
    let g_coating_arr = [];
    let g_frame_type_arr = [];

    onMount(async () => {
        LicenseManager.setLicenseKey(AG_GRID_LICENSE);
        grid_options_init();
        ref_this_grid_top = ref_this_grid.getBoundingClientRect().top + 20;

        await fetch_supplier_list(); // 매입처 리스트 조회
    });

    async function fetch_supplier_list() {
        // 임시 데이터
        let data = [
            { supplier_no: 1, supplier_name: "삼성전자", business_license: "123-45-67890", ceo_name: "이재용", manager_name: "김철수", company_tel: "02-1234-5678", status: "1" },
            { supplier_no: 2, supplier_name: "LG전자", business_license: "987-65-43210", ceo_name: "구광모", manager_name: "박영희", company_tel: "02-8765-4321", status: "1" },
        ];
        grid_options.api.setRowData(data);
        ref_supplier_count = data.length;
    }

    function grid_options_init() {
        const column_defs = [
            { 
                headerName: "매입처명", 
                field: "supplier_name",
            },
            { 
                headerName: "매입처명", 
                field: "supplier_name",
            },
            { 
                headerName: "매입처명", 
                field: "supplier_name",
                filter: "agSetColumnFilter"
            },
        ];

        grid_options = {
            columnDefs: column_defs,
            animateRows: true,
            rowSelection: "single",
            suppressAggFuncInHeader: true,
            suppressRowClickSelection: true,
            stopEditingWhenCellsLoseFocus: true,
            enableRangeSelection: true,
            floatingFiltersHeight: 40,
            defaultColDef: {
                cellClass: ["grid_default_cell_style", "string_type"],
                resizable: true,
                sortable: true,
                floatingFilter: true,
                filter: "agMultiColumnFilter",
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
            },
            suppressPaste: true,
            overlayLoadingTemplate: "<div class='grid_loading'></div>",
            overlayNoRowsTemplate: "<span>검색결과가 없습니다.</span>",
        };

        new Grid(ref_this_grid, grid_options);
        grid_options.api.setRowData([]);
    }
</script>
