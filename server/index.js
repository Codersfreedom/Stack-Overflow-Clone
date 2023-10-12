import connectDB from "./connectMongoDb.js";
import express from "express";
import fetch from "node-fetch";

import cors from "cors";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";

import dotenv from "dotenv";
connectDB();
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);


app.post("/chat", async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const inputText = req.body.prompt;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputText }],
    }),
  };
  await fetch(apiUrl, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      data.choices[0].message.content.trim();

      res
        .status(200)
        .json({ response: data.choices[0].message.content.trim() });
      // console.log(data.choices[0].message.content.trim());
    })
    .catch(() => {
      let Error = "Oops! Something went wrong, Please try again.";
      res.json({ response: Error });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Example app is running on ${PORT}`);
});

// const CONNECTION_URL = "mongodb+srv://rakeshmanna762:I92lR1ifQP1ToYLP@cluster0.cdaesat.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(() => app.listen(PORT,()=> {console.log(`server running on port ${PORT}`)}))
// .catch((err) => console.log(err.message))
