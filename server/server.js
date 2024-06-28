import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user-routes.js";
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8000;
configDotenv();

app.use(cors())


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.use("/api/user", userRoute);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(port, () => {
        console.log(`Db connected & Server running on port ${port}`);
    });
}).catch((error) => {
    console.log("error->>", error.message);
});

