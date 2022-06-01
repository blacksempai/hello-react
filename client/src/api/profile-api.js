import api from "./api";


export const profileAPI = {
    getProfile(id) { return api.get(`/profile/${id}`).then( res => res.data ) }
}