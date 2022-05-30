
export interface IUser {
    id: String,
    firstName: String,
    lastName: number,
    picture: Object,
    title: String,
}

export const initialState: any = {
    allUser: {} as IUser,
    limit: 10 as number,
    page: 0 as number,
    total: 0 as number,
}

export type UserState = Readonly<typeof initialState>;