// models/Visitor.js
import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true, // Ensure each IP address is unique
    trim: true, // Trim any extra spaces
  },
  visitDate: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", visitorSchema);
