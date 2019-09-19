import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://fhd.com.ua/`,
    headers: {
        'API-KEY': '849246fb-1531-4da7-b81e-ddd60f9def36'
    },
});

export const profileAPI = {
    getAppBar(userID){
        return instance.get(`/`);
    },
};