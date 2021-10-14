import express from "express";
import connectDB from "./config/db.js";
const app = express();
const PORT = 5000;

import educationRoute from "./routes/educationRoute.js";
import personalRoute from "./routes/personalRoute.js";
import experienceRoute from "./routes/experienceRoute";
connectDB();

// method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome To Portfolio App" });
});

app.use("/api/personal", personalRoute);
app.use("/api/education", educationRoute);
app.use("/api/experience", experienceRoute);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server started at port ${PORT}`);
});
