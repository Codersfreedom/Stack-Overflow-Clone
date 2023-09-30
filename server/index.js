import connectDB from './connectMongoDb.js'
import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js';
import dotenv from 'dotenv';
connectDB();
const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

// app.get('/',(req,res)=>{
// res.send("This is a stack overflow clone API")

// })
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

<<<<<<< HEAD
const PORT =  5000
app.listen(PORT,()=>{
    console.log(`Example app is running on ${PORT}`)
})
// const CONNECTION_URL = "mongodb+srv://rakeshmanna762:I92lR1ifQP1ToYLP@cluster0.cdaesat.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(() => app.listen(PORT,()=> {console.log(`server running on port ${PORT}`)}))
// .catch((err) => console.log(err.message))
=======
const PORT = process.env.PORT|| 5000
app.listen(PORT,()=>{
    console.log(`Example app is running on ${PORT}`)
})


// mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(() => app.listen(PORT,()=> {console.log(`server running on port ${PORT}`)}))
// .catch((err) => console.log(err.message))
>>>>>>> 99773a87d465f12146d20b0991bdb207285b6d79
