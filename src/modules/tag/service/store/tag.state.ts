
export interface ITag {
    id: String,
    firstName: String,
    lastName: number,
    picture: Object,
    title: String,
}

export const initialState: any = {
    allTag: {} as ITag,
    limit: 10 as number,
    page: 0 as number,
    total: 0 as number,
}

export type TagState = Readonly<typeof initialState>;