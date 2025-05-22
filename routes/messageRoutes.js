import express from "express";
import { getMessagesByTicket, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/:ticketId", getMessagesByTicket);
router.post("/", sendMessage);

export default router;
