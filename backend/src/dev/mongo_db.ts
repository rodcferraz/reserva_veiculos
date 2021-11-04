import  mongoose from "mongoose";

const Mongo = mongoose.connect("mongodb://localhost:27017/happimobi");
const MongoConnection = async function(){
    return await (await Mongo).connection;
}

export default MongoConnection;