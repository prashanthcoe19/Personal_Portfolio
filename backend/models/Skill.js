import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  language: [
    {
      type: String,
      required: true,
    },
  ],
  frameworks: [
    {
      type: String,
      required: true,
    },
  ],
  tools: [
    {
      type: String,
      required: true,
    },
  ],
  portfolioOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Skill", skillSchema);
