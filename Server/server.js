import express from "express";
import animeRoute from "./router/animeRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/anime', animeRoute);

app.listen(3000, ()=>{
    console.log("server is uppp")
})