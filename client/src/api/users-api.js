import api from "./api";


export const usersAPI = {
    getUsers(page = 0){ return api.get(`/users?page=${page}`).then( res => res.data ) }
}
