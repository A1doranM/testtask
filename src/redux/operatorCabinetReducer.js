import SVGjson from '../json/SVGjson';

const INIT_PERSONAL_CABINET = 'INIT_PERSONAL_CABINET';

let initialState = {
    SVGjson: SVGjson,
    operatorID: 123,
    operatorName: 'fsd'
};

export const OperatorCabinetReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PERSONAL_CABINET:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const initOperatorCabinetActionCreator = () => {
    return {
        type: INIT_PERSONAL_CABINET,
    }
};
