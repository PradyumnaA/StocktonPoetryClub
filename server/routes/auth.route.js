import express from "express";
import {signup} from "../controllers/auth.controller.js";
const router = express.Router();

// POST route for signup
router.post('/signup', signup);

export default router;
