import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  contact_info: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  number_of_seats: {
    type: Number,
    require: true,
  },
  special_request: {
    type: String,
    require: false,
  },
  table_preferance: {
    type: String,
    require: false,
  },
  membership: {
    type: Boolean,
    require: true,
    default: false,
  },
  status: {
    type: Boolean,
    require: true,
    default: true,
  },
  additionl_services: {
    type: String,
    require: false,
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);
export default Reservation;
