import express from "express";
const { getTickets, getTicketById, createTicket, updateTicketStatus } = require("../controllers/ticketController");

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);
router.put("/:id/status", updateTicketStatus);

export default router;
