import ApiService from "~/core/ApiService";
import JWTService from "~/core/JWTService";

export const state = () => ({
    token: '',
    user: '',
})

export const getters = {
    
}

export const mutations = {
    setAuth(state, payload){
        state.token = payload.token;
        state.user = payload.user;
    },
    removeAuth(state){
        state.token = '';
        state.user = '';
    }
}



