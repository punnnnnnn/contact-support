import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true },
  sender: { type: String, required: true }, // "Admin" หรือ "User"
  text: { type: String },
  image: { type: String }, // base64 image
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Message", MessageSchema);
