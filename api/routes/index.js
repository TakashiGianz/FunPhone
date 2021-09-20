import express from "express";
import { addNewUser, getRoom, getRoomUsers } from "../controllers/room.js";
const router = express.Router();

router.get("/rooms", getRoom)
router.get("/rooms/:id", getRoomUsers)


router.post("/rooms/:id", addNewUser)

  export default router;