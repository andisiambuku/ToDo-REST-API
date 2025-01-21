import mongoose from "mongoose";

export function connectDB() {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/tickets";
    
    mongoose.connect(mongoURI).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    ).catch((err: Error) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
      process.exit();
    })
    
}