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



// ✅ Update Company Address
export const updateCompanyAddress = async (req, res) => {
  try {
    const { id } = req.params; // Company address ID from URL
    const { email, phone, address } = req.body;

    

    // 🔄 Update the address by ID
    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { email, phone, address },
      { new: true, runValidators: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ error: "Address not found." });
    }

    // ✅ Success
    res.status(200).json({
      message: "Company address updated successfully.",
      data: updatedAddress,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// get all addresses
export const GetAllAddress = async (req, res) => {
  try {
    const allAddresses = await Address.find();

    if (allAddresses.length === 0) {
      return res.status(404).json({
        message: "No addresses found.",
      });
    }

    res.status(200).json({
      message: "All addresses fetched successfully.",
      data: allAddresses,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch addresses.",
      message: err.message,
    });
  }
};
