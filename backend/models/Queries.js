import mongoose from "mongoose";







const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(com|in|Blog|blog|tech|yahoo|Xyz|Online|Org|Info|Shop|shop|info|org|online|net|org|co\.in)$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    service: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },

    how_soon:{
        type:String,
        required:true,
    },
   
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // creates `createdAt` and `updatedAt`
  }
);


const Queries = mongoose.model("Queries", contactSchema);

export default Queries;
