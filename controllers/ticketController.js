import Ticket from "../models/Ticket.js";

// GET Tickets
export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ date: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET Ticket by ID
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST Ticket
export const createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    const saved = await ticket.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT Update Ticket Status
export const updateTicketStatus = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    ticket.status = req.body.status;
    await ticket.save();

    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
