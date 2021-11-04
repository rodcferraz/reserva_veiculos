import { Typegoose, prop } from "@hasezoey/typegoose";
import db from "../dev/mongo_db";
import { Schema } from "mongoose";

export class Car extends Typegoose{
    _id: Schema.Types.ObjectId;
    @prop()
    name: string;
    @prop()
    brand: string;
    @prop()
    year: Date;
    @prop({default: Date.now})
    createdAt: Date;
    @prop({default: Date.now})
    DeletedAt: Date;

    static async GetModel() {return new Car().getModelForClass(Car, {existingConnection: await db()});};
}