
export interface IComment {
    id: String,
    post: String,
    publishDate: number,
    owner: Object,
    message: String,
}

export const initialState: any = {
    allComment: {} as IComment,
    limit: 10 as number,
    page: 0 as number,
    total: 0 as number,
}

export type CommentState = Readonly<typeof initialState>;