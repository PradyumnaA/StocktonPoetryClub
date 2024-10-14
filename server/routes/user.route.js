// user.route.js
import express from 'express';
import {getUser} from "../controllers/user.controller.js";

const router = express.Router();

// Delegate route handling to the controller's 'getUser' function
router.get('/', getUser);

export default router;
