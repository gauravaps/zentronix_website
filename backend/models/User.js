import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName:{
   type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
     required: [true, "Email is required"],
     match: [
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|co\.in|xyz|info|blog|tech|shop|online|yahoo)$/,
  "Please enter a valid email",
],

  },

   phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },

  password: {
    type: String,
    required: true,
  },
  image: {
        type: String,
        default: "https://res.cloudinary.com/gauravkacloud/image/upload/v1731986753/photo_yrra2i.png", 
    },

  role: {
    type: String,
    enum: ['normal', 'admin'],
    default: 'normal',
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);