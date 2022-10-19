import express from 'express';
import db from './config/database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// import Users from './models/userModel.js';

dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log("Database connected");
}catch(e) {
    console.error(e);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));