import express from "express";
import { registerUser } from "../controllers/UserController.js";
const router = express.Router();






//User route start here ...


//User's Registration...
// POST /api/register route
router.post('/register' , registerUser);




export default router;