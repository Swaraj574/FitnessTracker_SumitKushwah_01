require("dotenv").config();
const express = require("express");
const mongoose =  require("mongoose")
const cors  = require('cors');
const app = express();
const port = 3000;
const MONGO_URL = process.env.MONGO_URL;
const userRoutes = require("./routes/user.js")
const TutorialRoutes =  require("./routes/tutorials.js")
const BlogRoutes = require('./routes/blog.js')
const ChatRoutes =  require("./routes/ChatBot.js")
const clubRoutes = require("./routes/ClubRoutes.js")
const challengeRoutes = require('./routes/ChallengeRoute');



app.use(cors());

app.options('*', cors());  // This will enable CORS preflight for all routes


app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        res.status(400).json({ error: "File size exceeds the allowed limit." });
        break;
      case "LIMIT_UNEXPECTED_FILE":
        res.status(400).json({ error: "Unexpected file format." });
        break;
      default:
        res.status(400).json({ error: "Multer error: " + err.message });
    }
  } else if (err.message === "Only JPEG, PNG, and JPG files are allowed!") {
    // Custom file validation error
    res.status(400).json({ error: err.message });
  } else {
    // Handle all other errors
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});



app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        res.status(400).json({ error: "File size exceeds the allowed limit." });
        break;
      case "LIMIT_UNEXPECTED_FILE":
        res.status(400).json({ error: "Unexpected file format." });
        break;
      default:
        res.status(400).json({ error: "Multer error: " + err.message });
    }
  } else if (err.message === "Only JPEG, PNG, and JPG files are allowed!") {
    // Custom file validation error
    res.status(400).json({ error: err.message });
  } else {
    // Handle all other errors
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

app.use('/api/user/',userRoutes);
app.use('/api/tutorials/',TutorialRoutes);
app.use("/api/blogs/", BlogRoutes);
app.use("/api", ChatRoutes);
app.use("/api/clubs", clubRoutes)
app.use('/api/challenges', challengeRoutes);


app.listen(port , ()=>{  console.log(`server is runnig at ${port}`);
})

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas")
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.get("/" , (req,res)=>{
  res.send("hey its me");
})

