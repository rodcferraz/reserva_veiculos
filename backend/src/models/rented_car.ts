import { Typegoose, prop } from "@hasezoey/typegoose";
import db from "../dev/mongo_db";
import { Schema } from "mongoose";

export class RentedCar extends Typegoose{
    _id: Schema.Types.ObjectId;
    @prop()
    carId: Schema.Types.ObjectId;
    @prop()
    userId: Schema.Types.ObjectId;
    @prop({default: Date.now})
    rentDate: Date;
    @prop()
    returnDate: Date;

    static async GetModel() {return new RentedCar().getModelForClass(RentedCar, {existingConnection: await db()});};
}