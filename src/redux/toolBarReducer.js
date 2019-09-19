const INIT_APP_BAR = 'INIT_APP_BAR';
const SWITCH_CURRENT_LANGUAGE = 'SWITCH_CURRENT_LANGUAGE';

let initialState = {
    logo: {
        "src": "give me Logo"
    },

    nav: [
        {id:1, src:"/", title_RU: "ГЛАВНАЯ", title_EN: "HOME"},
        {id:2, src:"/", title_RU: "КОНТАКТЫ", title_EN: "CONTACTS"}
    ],

    langMenu: {
        id: 3,
        svg: "",
        title_RU: "RU",
        submenu: [
            {id: 0, title: "RU"},
            {id: 1, title: "EN"}
        ]
    },

    signUpButton: {
        id: 6,
        svg: "",
        title_RU: "РЕГИСТРАЦИЯ",
        title_EN: "SIGN UP"
    },

    logInButton: {
        id: 7,
        svg: "",
        title_RU: "ВОЙТИ",
        title_EN: "LOG IN"
    },

    currentLanguage: 'EN'
};

export const toolBarReducer = (state = initialState, action) => {
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

export const initToolBarActionCreator = (data) =>{
    return {
        type: INIT_APP_BAR,
        data: data
    }
};

export const switchCurrentLanguageActionCreator = (language) =>{
    return {
        type: SWITCH_CURRENT_LANGUAGE,
        language: language
    }
};

export const initToolBarThunkCreator = () =>{
    return (dispatch) => {
        // appBarAPI.getAppBarData()
        //     .then(data => {
        //         dispatch(appBarActionCreator(data.items));
        //     });
        dispatch(initToolBarActionCreator(initialState));
    }
};

export const switchCurrentLanguageThunkCreator = (language) =>{
    return (dispatch) => {
        // appBarAPI.getAppBarData()
        //     .then(data => {
        //         dispatch(appBarActionCreator(data.items));
        //     });
        dispatch(switchCurrentLanguageActionCreator(language));
    }
};
