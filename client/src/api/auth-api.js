import api from "./api";

export const authAPI = {
    login(email, password) { return api.post(`/auth/login`,{email, password}).then( res => {
        api.defaults.headers.common['Authorization'] = 'Bearer '+res.data.token;
        return res.data;
    }) },
    register(user) { return api.post(`/auth/register`,{...user}).then( res => res.data ) },
}