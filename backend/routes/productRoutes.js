import express from "express";
const router = express.Router();
import upload from "../middleware/multer.middileware.js";
import { isAdmin, verifyToken } from "../middleware/authMiddleware.js";
import { addProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/addProductController.js";





// Add New Product
router.post('/add_product' ,verifyToken , isAdmin , upload.single("image") , addProduct)
//Get all products..
router.get('/all_products' , getAllProducts)
// Update/Edit the products..
router.put('/update_product/:id' ,verifyToken ,isAdmin ,upload.single("image") , updateProduct)
//Delete product..
router.delete('/delete_product/:id' , verifyToken , isAdmin ,deleteProduct);






export default router;