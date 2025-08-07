import express from "express";
import { isAdmin, verifyToken } from "../middleware/authMiddleware.js";
import { AddNewAddress } from "../controllers/AddressController.js";
const router = express.Router();



//add company's address..
router.post('/add_address' , verifyToken,isAdmin ,AddNewAddress)




export default router;