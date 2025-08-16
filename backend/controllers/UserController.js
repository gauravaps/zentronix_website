import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from 'jsonwebtoken';









 

export const registerUser = async (req, res) => {
  try {
    // If using form-data, fields in req.body, file in req.file (memoryStorage)
    const { firstName, lastName, email, phone, password, role } = req.body;
    console.log("Received body:", req.body);
    console.log("Received file:", req.file?.originalname);

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check existing email and phone
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email." });
    }
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: "Phone number already registered." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Prepare image value:
    // - if req.file exists, convert buffer -> dataURL (base64) and save into image (String)
    // - else do not set image; mongoose schema default will apply
    let imageValue;
    if (req.file && req.file.buffer) {
      const mime = req.file.mimetype; // e.g. image/png
      const base64 = req.file.buffer.toString("base64");
      imageValue = `data:${mime};base64,${base64}`; // store data URL string
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: role || "normal",
      ...(imageValue ? { image: imageValue } : {}), // set only if uploaded
    });

    await newUser.save();

    // Remove password from returned object
    const userToReturn = newUser.toObject();
    delete userToReturn.password;

    return res.status(201).json({ message: "User registered successfully", user: userToReturn });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};





/// Login user with jwt token..
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    // generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
  
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email,
        image:user.image,
        phone:user.phone,
        role: user.role,
        
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};




// Update profile
export const updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    // Image handle
    if (req.file) {
      user.image = req.file.buffer; 
      
    
    }

    // Password update
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: err.message });
  }
};

