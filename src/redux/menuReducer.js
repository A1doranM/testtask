import menuData from 'C:/Users/aldor/WebstormProjects/testtask/src/json/menujson.json';

const GET_MENU_DATA = 'GET_MENU_DATA';
const SET_LOGO = 'SET_LOGO';
const SET_NAV_ITEMS = 'SET_NAV_ITEMS';
const SET_LANGUAGE_MENU_ITEMS = 'SET_LANGUAGE_MENU_ITEMS';
const SET_CONTROLS = 'SET_CONTROLS';
const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';

let initialState = {
    ...menuData,
    currentLanguage: 'RU',
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_DATA:
            return {
                ...menuData,
                currentLanguage: 'EN',
            };
        // case SET_LOGO:
        //     return {
        //         ...state,
        //         logo: action.logo,
        //     };
        // case SET_NAV_ITEMS:
        //     return {
        //         ...state,
        //         nav: [...state.nav, action.navItem],
        //     };
        // case SET_LANGUAGE_MENU_ITEMS:
        //     return state;
        // case SET_CONTROLS:
        //     return state;
        case SET_CURRENT_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.language,
            };
        default:
            return state;
    }
};

export const getMenuDataActionCreator = (data) => {
    return {
        type: GET_MENU_DATA,
    }
};

export const setCurrentLanguageActionCreator = (languageID) => {
    let language = menuData.langMenu.submenu[languageID].title;
    return {
        type: SET_CURRENT_LANGUAGE,
        language: language,
    }
};

export const getMenuDataThunkCreator = () => {
    return (dispatch) => {
        //Делаем запрос на сервер
        //Потом вызываем getMenuDataActionCreator
        //И устанавливаем данные из json в меню

        // serverAPI.getMenu()
        //     .then(data => {
        //         dispatch(getMenuDataActionCreator(data));
        //     });

        //Но без сервера делаем так
        dispatch(getMenuDataActionCreator());
    }
};

export const setCurrentLanguageThunkCreator = (languageID) => {
    return (dispatch) => {
        //Делаем запрос на сервер
        //Потом вызываем ActionCreator
        //И устанавливаем данные из json в меню

        //Но без сервера делаем так
        return dispatch(setCurrentLanguageActionCreator(menuData.langMenu.submenu[languageID].title));
    }
};
