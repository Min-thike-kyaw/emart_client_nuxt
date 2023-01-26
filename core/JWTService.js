
class JWTService {
    static ID_TOKEN_KEY = 'auth_token';
    static getToken (app){
        return app.$cookies.get(JWTService.ID_TOKEN_KEY);   
    }
    static saveToken(app,new_token){
        return app.$cookies.set(JWTService.ID_TOKEN_KEY, new_token);   
    }
    static removeToken(app){
        return app.$cookies.remove(JWTService.ID_TOKEN_KEY);
    }
}
export default JWTService;