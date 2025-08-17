import express from "express";
import { getAllUsers, loginUser, registerUser, updateUserProfile } from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.middileware.js";
import { isAdmin ,verifyToken } from "../middleware/authMiddleware.js";



 

//User route start here ...


//User's Registration...
// POST /api/register route
router.post("/register", upload.single("image"), registerUser);
router.get("/getallusers" , getAllUsers)
router.post("/loginuser" , loginUser)
router.put("/update-profile/:id" ,verifyToken , isAdmin , upload.single("image"), updateUserProfile)




export default router;