import SVGjson from '../json/SVGjson';

const INIT_PERSONAL_CABINET = 'INIT_PERSONAL_CABINET';

let initialState = SVGjson;

export const PersonalCabinetReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PERSONAL_CABINET:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const initPersonalCabinetActionCreator = (data) =>{
    return {
        type: INIT_PERSONAL_CABINET,
    }
};
