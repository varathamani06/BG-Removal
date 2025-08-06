import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/mongodb.js";
import userRouter from "./routers/userRouters.js";



const app = express();

await connectDb();

app.use(cors());
app.use(express.json());


// Sample route
app.get("/", (req, res) => {
  res.send("Hello from Vercel serverless function!!!");
});

app.use("/api/user",userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
    
})