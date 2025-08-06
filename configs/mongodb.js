import mongoose from "mongoose";

const connectDb = async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/bgRemoval`);
    console.log("✅ Database connected");
    }
    catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

export default connectDb;