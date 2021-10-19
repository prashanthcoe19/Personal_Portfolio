import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  dob: {
    type: String,
    // required: true,
  },
  bio: {
    type: String,
  },
  photo: {
    data: Buffer,
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Personal", personalSchema);
