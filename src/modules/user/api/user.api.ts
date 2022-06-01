import axios from "../../../config/axios";

export interface IUserApi {
    getAllUser(): any
}
// list des api pour l'user
export class UserApi implements IUserApi {
    async getAllUser() {
        return axios.Get('/user' + `?page=${null}&limit=${null}`);
    }
}
