import SVGjson from '../json/SVGjson';

const INIT_PERSONAL_CABINET = 'INIT_PERSONAL_CABINET';

let initialState = {
    SVGjson: SVGjson,
    actualOrdersTableData: [
        {
            invoiceNumber: 403,
            date: new Date('2018-09-28, 12:06:28').toLocaleString(),
            status: 'checked',
        },
        {
            invoiceNumber: 532,
            date: new Date('2018-10-28, 12:06:28').toLocaleString(),
            status: 'checked',
        },
        {
            invoiceNumber: 240,
            date: new Date('2018-06-28, 12:06:28').toLocaleString(),
            status: 'checked',
        },
    ],
};

export const PersonalCabinetReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PERSONAL_CABINET:
            return {
                ...state,
            };
        // case SORT_BY_KEY:
        //     return {
        //         ...state,
        //         actualOrdersTableData: [...state.actualOrdersTableData.sort(compareBy(action.key))]
        //     };
        default:
            return state;
    }
};

export const initPersonalCabinetActionCreator = () => {
    return {
        type: INIT_PERSONAL_CABINET,
    }
};

// export const sortByKeyActionCreator = (key) => {
//     return {
//         type: SORT_BY_KEY,
//         key: key,
//     }
// };
//
// const compareBy = (key) => {
//     return function (a, b) {
//         if (a[key] > b[key]) return -1;
//         if (a[key] < b[key]) return 1;
//         return 0;
//     };
// };
