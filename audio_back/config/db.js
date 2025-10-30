import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const connectionMongoDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO);
        console.log("Ya quedo we felicidades, te conectaste a Mongoose, no estas tan animal")
    } 
    
    catch (error) {
        console.log(`ERROR: ${error.message}`);
        process.exit(1);
    }
}

export default connectionMongoDB