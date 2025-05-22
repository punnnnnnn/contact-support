import Message from "../models/Message.js";

export const getMessagesByTicket = async (req, res) => {
  try {
    const messages = await Message.find({ ticketId: req.params.ticketId }).sort({ date: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const sendMessage = async (req, res) => {
  const { ticketId, sender, text, image } = req.body;
  const newMessage = new Message({ ticketId, sender, text, image });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
