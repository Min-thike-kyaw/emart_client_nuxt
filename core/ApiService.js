import JWTService from "./JWTService";
class ApiService {
    vueInstance;

    static init(App) {
        ApiService.vueInstance = App;
        ApiService.vueInstance.$http.setHeader('Authorization', 'Bearer '+JWTService.getToken(App));
    }
}
export default ApiService;