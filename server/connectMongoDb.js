import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from 'dotenv';
dotenv.config();
=======
const CONNECTION_URL = "mongodb+srv://rakeshmanna762:I92lR1ifQP1ToYLP@cluster0.cdaesat.mongodb.net/?retryWrites=true&w=majority"
>>>>>>> 99773a87d465f12146d20b0991bdb207285b6d79
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
