import express from 'express';
import db from './config/database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import Users from './models/userModel.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

try{
    console.log(PORT)
    await db.authenticate();
    console.log("Database connected");
}catch(e) {
    console.error(e);
}

app.use(cors({credentials: true, origin:`http://localhost:${PORT}`}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("Server running at port " + PORT));