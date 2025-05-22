import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // base64 image
  status: { type: String, default: "OPEN" },
  department: { type: String, default: "Support" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Ticket", TicketSchema);
