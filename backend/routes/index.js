import express from "express";
import reservationRoute from "./reservations.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("Welcome to little lemon");
});

router.use("/reservation", reservationRoute);

export default router;
