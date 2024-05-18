import mongoose from "mongoose";


export const dbconnect = async () => {
    try {
        if (process.env.MONGODB_URL) {
            await mongoose.connect(process.env.MONGODB_URL)
            console.log("database connected successfully");
        }else{
            throw new Error("MONGODB_URL not defined")
        }
        
    } catch (err) {
        console.log("database connection failed" + err);
    }
}
