import mongoose from "mongoose";
const mongoURI = process.env.MONGO_URI! ;

export function connectDB() {
    
    mongoose.connect(mongoURI).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    ).catch((err: Error) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
      process.exit();
    })
    
}

