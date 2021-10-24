import express from "express";
import connectDB from "./config/db.js";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import cors from "cors";
const app = express();
const PORT = 5000;

import educationRoute from "./routes/educationRoute.js";
import personalRoute from "./routes/personalRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import projectRoute from "./routes/projectRoute.js";
import skillRoute from "./routes/skillRoute.js";
connectDB();

// method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome To Portfolio App" });
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/personal", personalRoute);
app.use("/api/education", educationRoute);
app.use("/api/experience", experienceRoute);
app.use("/api/project", projectRoute);
app.use("/api/skill", skillRoute);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + "./uploads/"));

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server started at port ${PORT}`);
});
