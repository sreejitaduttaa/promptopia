import { MongoTopologyClosedError } from "mongodb";
import mongoose, { mongo } from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery' , true);

    if(isConnected){
        console.log('MongoDB IS ALREADY CONNECTED');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI , {
            dbName: "share_prompt",
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        isConnected = true;

        console.log('MongoDB CONNECTED');
        
    } catch (error) {
        console.log("NOT CONNECTED db");
        console.log(error);
    }

}