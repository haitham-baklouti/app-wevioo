
export interface IPost {
    id: String,
    image: String,
    likes: number,
    tags: Object,
    text: String,
    publishDate: String,
    owner: Object,
}

export const initialState: any = {
    allPost: {} as IPost,
    limit: 10 as number,
    page: 0 as number,
    total: 0 as number,
}

export type PostState = Readonly<typeof initialState>;