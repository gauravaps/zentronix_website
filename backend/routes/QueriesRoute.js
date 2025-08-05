import express from "express";
const router = express.Router();

import {createContact, deleteQuery, getAllContacts} from '../controllers/QueriesController.js';












router.post("/createquery", createContact);
router.get('/getallquery' , getAllContacts)
router.delete('/deletequery/:id' , deleteQuery)

export default router;  
