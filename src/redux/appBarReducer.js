const INIT_APP_BAR = 'INIT_APP_BAR';

let initialState = {
    logo: {
        "src": "sdadasd"
    },

    nav: [
        {id:1, svg:"", title_RU: "ГЛАВНАЯ", title_EN: "HOME"},
        {id:2, svg:"", title_RU: "КОНТАКТЫ", title_EN: "CONTACTS"}
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
    }
};

export const appBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP_BAR:
            return {
                ...state,
            };
        default:
            return state;
    }
};
