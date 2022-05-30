import axios from "../../../config/axios";

export interface ITagApi {
    getAllTag(): any
}
export class TagApi implements ITagApi {
    async getAllTag() {
        return axios.Get('/tag');
    }
}
