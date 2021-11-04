import { Typegoose, prop } from "@hasezoey/typegoose";
import db from "../dev/mongo_db";
import { Schema } from "mongoose";

export class User extends Typegoose{
    _id: Schema.Types.ObjectId;
    @prop()
    name: string;
    @prop()
    password: string;
    @prop()
    token: string;

    static async GetModel() {return new User().getModelForClass(User, {existingConnection: await db()});};
}