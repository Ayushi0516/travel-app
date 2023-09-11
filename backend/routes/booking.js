import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

const router = express.Router();
// verifyUser,
router.post("/",verifyUser,  createBooking);
// verifyUser,
router.get("/:id",verifyUser,  getBooking);
// verifyAdmin,
router.get("/",verifyAdmin,  getAllBooking);

export default router;
