export const excel_styles = [
    //하단 list의 제목 부분
    {
        id: 'header',
        interior: {
            color: '#CCCCCC', //이게 배경색 지정
            pattern: 'Solid'
        },
        alignment:{
            horizontal:'Center',
            wrapText: true
        },
        font: {
            bold: true
        },
        //테두리 지정
        borders: {
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    {
        id: 'string_type_no_border',
        dataType: 'string',
        font: {size: 9},
    },
    {
        id: 'string_type',
        dataType: 'string',
        font: {size: 9},
        borders: {
            borderBottom: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderLeft: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderRight: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderTop: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            }
        }
    },
    {
        id: 'number_type',
        dataType: 'number',
        font: {size: 9},
        borders: {
            borderBottom: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderLeft: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderRight: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderTop: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            }
        },
        numberFormat: {format:"#,###"}
    },
    {
        id: "barcode",
        dataType: "string",
        font: {size: 9},
        borders: {
            borderBottom: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderLeft: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderRight: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            },
            borderTop: {
                color: "#000000", lineStyle: 'Continuous', weight: 1
            }
        }
    },
    {
        id: 'font9',
        font: {size: 9}
    },
    ////////////////////////////title
    {
        id: 'title',
        alignment:{
            horizontal:'CenterAcrossSelection'
        },
        font: {
            bold: true,
            size: 23
        }
    },
    //서브 네임 값 입력 칸 셋팅
    {
        id: 'sub_name',
        alignment:{
            horizontal:'Left'
        },
        font: {
            bold: true
        },
        borders: {
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    //서브 제목 값 입력 칸 셋팅
    {
        id: 'sub_title',
        alignment:{
            horizontal:'Center'
        },
        font: {
            bold: true
        },
        borders: {
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    //서브 값 입력 칸 셋팅
    {
        id: 'sub_amount',
        alignment:{
            horizontal:'Right'
        },
        font: {
            bold: true
        },
        borders: {
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    ////////////////////////////footer
    {//총 합계 구분 라인
        id: 'footer_line',
        dataType: 'string',
        /* interior: {
             pattern: 'Solid', //선지정
             /!*color: '#CCCCCC'*!/ //배경색
         },*/
        font: {
            size: 1 //글자 크기
        },
        borders: { //해당 셀 테두리 디자인
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',

                weight: 1
            }
        }
    },
    {//총 합계 이름
        id: 'footer_name',
        dataType: 'string',
        /*interior: {
            pattern: 'Solid', //선지정
        },*/
        interior: {
            color: "#FFFFFF", pattern: 'Solid'
        },
        alignment: {
            horizontal:'Center' //글자 가운데 정렬
        },
        font: {
            bold: true, //글자 굵게
            size: 11 //글자 크기
        },
        borders: { //해당 셀 테두리 디자인
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    {//총 합계 값
        id: 'footer_value',
        dataType: 'string',
        /*interior: {
            pattern: 'Solid' //선지정
        },*/
        alignment: {
            horizontal:'Right' //글자 오른쪽 정렬
        },
        font: {
            bold: true, //글자 굵게
            size: 11 //글자 크기
        },
        borders: { //해당 셀 테두리 디자인
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1.5
            }
        }
    },
    {// 빈값
        id: 'footer_blank',
        dataType: 'string',
        /*interior: {
            pattern: 'Solid' //선지정
        },*/
        font: {
            bold: true, //글자 굵게
        },
        borders: { //해당 셀 테두리 디자인
            borderBottom: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderLeft: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderRight: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            },
            borderTop: {
                color: '#000000',
                lineStyle: 'Continuous',
                weight: 1
            }
        }
    },
    {
        id: "ag_fixed_cls",
        dataType: "string",
        interior: {
            color: "#FFF3B3", //이게 배경색 지정
            pattern: "Solid",

        },
        font: {size: 9},
        borders: {
            borderBottom: {
                color: "#000000", lineStyle: "Continuous", weight: 1
            },
            borderLeft: {
                color: "#000000", lineStyle: "Continuous", weight: 1
            },
            borderRight: {
                color: "#000000", lineStyle: "Continuous", weight: 1
            },
            borderTop: {
                color: "#000000", lineStyle: "Continuous", weight: 1
            }
        }
    }
];
