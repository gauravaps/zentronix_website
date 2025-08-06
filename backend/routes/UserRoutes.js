import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.middileware.js";
import { isAdmin ,verifyToken } from "../middleware/authMiddleware.js";





//User route start here ...


//User's Registration...
// POST /api/register route
router.post("/register", upload.single("image"), registerUser);
router.get("/getallusers" , getAllUsers)
router.post("/loginuser" , loginUser)




export default router;