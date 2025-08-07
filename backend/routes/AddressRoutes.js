import express from "express";
import { isAdmin, verifyToken } from "../middleware/authMiddleware.js";
import { AddNewAddress, updateCompanyAddress } from "../controllers/AddressController.js";
const router = express.Router();



//add company's address..
router.post('/add_address' , verifyToken,isAdmin ,AddNewAddress)

// update company's address..
router.put('/update_address/:id', verifyToken , isAdmin , updateCompanyAddress)




export default router;