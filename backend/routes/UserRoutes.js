import express from "express";
import { registerUser } from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.middileware.js";





//User route start here ...


//User's Registration...
// POST /api/register route
router.post('/register' , registerUser);




export default router;