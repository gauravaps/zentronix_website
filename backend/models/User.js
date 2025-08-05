import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
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

  role: {
    type: String,
    enum: ['normal', 'admin'],
    default: 'normal',
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);