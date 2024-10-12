import { model, Schema } from "mongoose";

export interface usersInterface{
    id: number,
    name: string,
    mail: string,
    password: string,
    comment: string,
    experiences: Array<string>;
}
export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<usersInterface,'id'>

export const usersSchema = new Schema<usersInterface>({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String,
    experiences: { type: [Number], default: [] }
})

export const usersofDB = model<usersInterface>('user',usersSchema)