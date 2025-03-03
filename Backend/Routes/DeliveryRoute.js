import express from "express";
import { getRecentDeliveries } from "../Controllers/DeliveryController.js";
import { saveTripController } from "../Controllers/SaveTripController.js";
import { getTripsController } from "../Controllers/getTripsController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/recent-deliveries", getRecentDeliveries);
router.post("/trips", upload.single("vehicleImage"), saveTripController);
router.get("/trips", getTripsController);

export default router;
