import User from "../models/User.js";



export const registerUser = async (req, res) => {
  try {
    const { name, email,phone, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const existingPhoneNumber = User.findOne({phone});
    if(existingPhoneNumber){
        return res.status(400).json({message:'Phone number already registered'})
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: role || 'normal', // default: normal
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};