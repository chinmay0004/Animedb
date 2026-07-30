import express from "express";
import { getAllAnime, getAnimeById, AiringAnime } from "../controller/animeController.js";

const router = express.Router();

router.get("/", getAllAnime);
router.get("/airing", AiringAnime);
router.get("/:id", getAnimeById);


export default router;