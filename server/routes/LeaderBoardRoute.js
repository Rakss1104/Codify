import express from "express";
import { fetchLeaderboard } from "../controllers/leaderboardController.js";

const leaderBoardRouter = express.Router();

leaderBoardRouter.get("/leaderboard", fetchLeaderboard);

export default leaderBoardRouter;
