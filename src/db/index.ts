import mongoose from "mongoose";

    const connectDb = async () => {
    await mongoose.connect("mongodb+srv://rawankadi:Stella12345@cluster0.fka3c9r.mongodb.net/EpicureDB");
    };
    
export { connectDb }