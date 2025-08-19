import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from 'jsonwebtoken';
import uploadonCloudinary from "../utils/cloudinary.js";









 

export const registerUser = async (req, res) => {
  try {
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

     let imageUrl = null;

       if (req.file) {
  console.log("Multer File Path:", req.file.path);

  const uploadResponse = await uploadonCloudinary(req.file.path);
  if (uploadResponse) {
    imageUrl = uploadResponse.secure_url;
  } else {
    return res.status(500).json({ message: "Image upload failed at Cloudinary." });
  }
}

const newUser = new User({
  firstName,
  lastName,
  email,
  phone,
  password: hashedPassword,
  role: role || "normal",
  image:imageUrl || undefined , 
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

    // --- Basic details update ---
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    // --- Image handle (upload to Cloudinary) ---
    if (req.file) {
      console.log("Updating profile image, file path:", req.file.path);

      const uploadResponse = await uploadonCloudinary(req.file.path, "zentronix");
      if (uploadResponse) {
        user.image = uploadResponse.secure_url; // ✅ Cloudinary URL save in DB
      } else {
        return res.status(500).json({ message: "Image upload failed at Cloudinary." });
      }
    }

    // --- Password update ---
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    // Password ko response se hata do
    const updatedUser = user.toObject();
    delete updatedUser.password;

    res.status(200).json({
      message: "Profile updated successfully",
      updatedUser,
    });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({
      message: "Error updating profile",
      error: err.message,
    });
  }
};
