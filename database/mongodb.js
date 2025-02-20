import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";



if(!DB_URI){
    throw new Error("please define the mongodb_uri env variable inside .env.<development/production>.local");
}


const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log("db connection is made!!!")
    }
    catch(err){
        console.log("Error connecting the database",err);
        process.exit(1);
    }
}

export default connectToDatabase;

