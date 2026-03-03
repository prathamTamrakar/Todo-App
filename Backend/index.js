import dotenv  from 'dotenv'
dotenv.config()
import express from 'express';
import cors from "cors";
import connectDB from './db.js';
import todoRouter from './routes/todo.js';
const PORT = process.env.PORT || 3000;
const app = express()
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

connectDB().then(()=>{
    console.log("MongoDB Connected!"); 
}).catch((error)=>{
    console.log("Database Connection Failed");
})

app.use('/api/todos',todoRouter)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})


