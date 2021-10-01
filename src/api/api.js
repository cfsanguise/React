import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '5588aff6-b9f1-4ece-ad99-db7acbc95e3d'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUnfollow (action, id)  {
        switch (action) {
            case 'follow': {
                return instance.post(`follow/${id}`).then(response => response.data);
            }
    
            case 'unfollow': {
                return instance.delete(`follow/${id}`).then(response => response.data);
            }
    
            default : {
                return instance.get(`follow/${id}`).then(response => response.data);
            }
        }
    }
}


export {usersAPI};