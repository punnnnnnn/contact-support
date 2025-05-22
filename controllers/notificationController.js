const Notification = require("../models/Notification.js");

// GET Notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ date: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST Notification
exports.createNotification = async (req, res) => {
  const { ticketId, message } = req.body;
  try {
    const newNotification = new Notification({
      ticketId,
      message,
    });
    const saved = await newNotification.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
