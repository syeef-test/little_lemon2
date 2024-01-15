import express from "express";
import reservationModel from "../models/reservationModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const requiredFields = [
      "name",
      "contact_info",
      "date",
      "time",
      "number_of_seats",
      "special_request",
      "table_preferance",
      "membership",
      "status",
      "additional_services",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const newReservation = {
      name: req.body.name,
      contact_info: req.body.contact_info,
      date: req.body.date,
      time: req.body.time,
      number_of_seats: req.body.number_of_seats,
      special_request: req.body.special_request,
      table_preferance: req.body.table_preferance,
      membership: req.body.membership,
      status: req.body.status,
      additional_services: req.body.additional_services,
    };

    const reservation = await reservationModel.create(newReservation);

    if (!reservation) {
      return res.status(500).send({ message: "Failed to create reservation" });
    }

    return res.status(200).send(reservation);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const reservations = await reservationModel.find({});
    return res.status(200).json({
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await reservationModel.findById(id);
    return res.status(200).json({
      count: reservation.length,
      data: reservation,
    });
    Reservation;
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const requiredFields = [
      "name",
      "contact_info",
      "date",
      "time",
      "number_of_seats",
      "special_request",
      "table_preferance",
      "membership",
      "status",
      "additional_services",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const { id } = req.params;
    const result = await reservationModel.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Reservation Details Not Found" });
    }

    return res
      .status(200)
      .json({ message: "Reservation Details Updated Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reservationModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Reservation Details Not Found" });
    }
    return res
      .status(200)
      .json({ message: "Reservation Details Deleted Succesfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
