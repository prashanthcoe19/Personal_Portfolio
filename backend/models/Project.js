import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
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
export default mongoose.model("Project", projectSchema);
