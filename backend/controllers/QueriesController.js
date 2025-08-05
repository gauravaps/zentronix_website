import Queries from "../models/Queries.js";





 

// create new query..
export const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      how_soon,
      budget,
      message,
    } = req.body;
console.log("Received data:", req.body)
    // 🔒 Manual validation for all required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !service ||
      !how_soon ||
      !budget ||
      !message
    ) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    // 📤 Create new query
    const newQuery = await Queries.create({
      firstName,
      lastName,
      email,
      phone,
      service,
      budget,
      how_soon,
      message,
    });

    // ✅ Send success response
    res.status(201).json({
      message:
        "Your query has been submitted successfully. We will get in touch very shortly.",
      data: newQuery,
    });
  } catch (error) {
    res.status(400).json({ message: err.message });
    
  }
};


    
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Queries.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
};