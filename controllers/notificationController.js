import Notification from "../models/Notification.js";

// GET Notifications
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ date: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST Notification
export const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    const saved = await notification.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
