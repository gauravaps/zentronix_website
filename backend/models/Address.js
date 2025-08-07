import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    lowercase: true,
     required:true,
 
  },

   phone: {
      type: String,
      required:true,
    },

  address: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });

export default mongoose.model('Address', userSchema);