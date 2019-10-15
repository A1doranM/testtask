const INIT_APP_BAR = 'INIT_APP_BAR';
const SWITCH_CURRENT_LANGUAGE = 'SWITCH_CURRENT_LANGUAGE';

let initialState = {

};

export const AllTrackersTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP_BAR:
            return {
                ...state,
                ...action.data,
            };
        case SWITCH_CURRENT_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.language,
            };
        default:
            return state;
    }
};
