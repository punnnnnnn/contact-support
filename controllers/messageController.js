import Message from "../models/Message.js";

// GET Messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST Message
export const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    const saved = await message.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
