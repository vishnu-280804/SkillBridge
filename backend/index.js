import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import authRoutes from "./routes/auth.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import { signup,signin,logout } from "./controllers/auth.controller.js";
dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT;
console.log(process.env.EMAIL);
console.log(process.env.EMAIL_PASSWORD);
app.use(
    cors({
      origin: "http://localhost:5173", // Change to your frontend URL
      credentials: true, // Allow sending cookies
    })
  );
  
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        secret: "your-secret-key",  // Change this to a secure key
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: true }, // secure: true for HTTPS
    })
);


connectDB();
app.use("/auth",authRoutes);
app.use("/cart",cartRoutes);


app.get("/",(req,res)=>{
    res.send("Hello World!");
    req.session.views++;
})

app.listen(port,()=>{
    console.log(`${port} Listening here`);
})