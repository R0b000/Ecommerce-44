import axiosConfig from "../config/axios.config";
import type { IEcommerceCredentials, IEcommereceRegisterCredentials } from "../pages/auth/ecommerce.auth.contract";

class AuthService {
    RegisterUser = async(data: IEcommereceRegisterCredentials) => {
        return await axiosConfig.post('/auth/register', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    ActivateAccount = async (token: string) => {
        return await axiosConfig.post('/auth/activate/'+token)
    }

    LoginUser = async (data: IEcommerceCredentials) => {
        let response = await axiosConfig.post('/auth/login', data);
        localStorage.setItem('_at_44', response.data.accessToken)
        localStorage.setItem('_rt_44', response.data.refreshToken)
        // document.cookie = `_at_44=${response.data.accessToken}, expiresAt: ${new Date(Date.now()+86400000)}`
        // document.cookie = `_rt_44=${response.data.refreshToken}, expiresAt: ${new Date(Date.now()+86400000)}`
    }

    getLoggedInUser = async() => {
        let response = await axiosConfig.get('/auth/me')
        return response.data;
    }
}

const authSvc = new AuthService;

export default authSvc;