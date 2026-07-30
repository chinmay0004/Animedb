import express from "express";
import { getAllAnime, getAnimeById, AiringAnime, FinishedAnimes, SearchAnime} from "../controller/animeController.js";

const router = express.Router();

router.get("/", getAllAnime);
router.get("/search", SearchAnime);
router.get("/airing", AiringAnime);
router.get("/finished", FinishedAnimes);
router.get("/:id", getAnimeById);


export default router;