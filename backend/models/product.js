import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
 description:{
    type:String,
    required:true,
    trim:true
 },
  liveUr:{
    type: String,
        required: true,
        trim: true,

 },
  
  image: {
        type: String,
        default: "https://res.cloudinary.com/gauravkacloud/image/upload/v1731986753/photo_yrra2i.png", 
    },

  
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);