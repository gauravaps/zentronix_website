import Address from "../models/Address.js";



// create new query..
export const AddNewAddress = async (req, res) => {
  try {
    const {
      
      email,
      phone,
      address
    } = req.body;
console.log("Received data:", req.body)
    // 🔒 Manual validation for all required fields
    if (
      
      !email ||
      !phone ||
      !address
    ) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    // 📤 Create new query
    const companyAddress = await Address.create({
     
      email,
      phone,
      address
    
    });

    // ✅ Send success response
    res.status(201).json({
      message:
        "Your company has been added successfully",
      data: companyAddress,
    });
  } catch (error) {
    res.status(400).json({ message: err.message });
    
  }
};