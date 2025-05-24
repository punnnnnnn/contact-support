import express from "express";
import { getMessages, createMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/:ticketId", getMessages);
router.post("/", createMessage);

export default router;
