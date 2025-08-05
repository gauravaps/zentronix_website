import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import upload from "../middleware/multer.middileware.js";









 

export const registerUser = async (req, res) => {

  try {
    const { firstName, lastName, email, phone, password, role } = req.body;
console.log("Received data:", req.body)

    // Manual field validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check for existing user (email)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    // Check for existing phone
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: "Phone number already registered." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: role || "normal",
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
