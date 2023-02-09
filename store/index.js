import ApiService from "~/core/ApiService";
import JWTService from "~/core/JWTService"

export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        
        const token = JWTService.getToken(app);
        if (token) {
            ApiService.init(app);
            await app.$http.$get('api/me').then((res) => {
                let user = res.data.data;
                commit("auth/setAuth", {
                    token,
                    user
                });
            }).catch((res) => {
                commit("auth/removeAuth");
            })

        } else {
            commit("auth/removeAuth");
        }
    }
}