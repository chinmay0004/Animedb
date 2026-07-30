import express from "express";
import animeRoute from "./router/animeRoute.js";

const app = express();
app.use(express.json());

app.use('/api/anime', animeRoute);

app.listen(3000, ()=>{
    console.log("server is uppp")
})