import express from "express";
const router = express.Router();

import {createContact, getAllContacts} from '../controllers/QueriesController.js';












router.post("/createquery", createContact);
router.get('/getallquery' , getAllContacts)

export default router;  
