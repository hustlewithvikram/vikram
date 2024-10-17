// models/Visitor.js
import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  visitDate: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", visitorSchema);
