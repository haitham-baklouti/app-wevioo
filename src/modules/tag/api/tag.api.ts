import axios from "../../../config/axios";

export interface ITagApi {
    getAllTag(): any
}
// list des api pour la tag
export class TagApi implements ITagApi {
    async getAllTag() {
        return axios.Get('/tag');
    }
}
