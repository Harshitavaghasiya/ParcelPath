import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/AuthRoutes.js";
import deliveryRoutes from "./Routes/DeliveryRoute.js";
import adminRoutes from "./Routes/adminRoutes.js"
import connectDB from "./Config/database.js";
import cors from "cors";
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000', // for local frontend
  'https://your-netlify-site.netlify.app' // your deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if using cookies or auth headers
}));
// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// connect to the database
connectDB();

app.use("/auth", authRoutes);
app.use("/delivery", deliveryRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
