import express from "express";
import { getTickets, getTicketById, createTicket, updateTicketStatus } from "../controllers/ticketController.js";

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", createTicket);
router.put("/:id/status", updateTicketStatus);

export default router;
