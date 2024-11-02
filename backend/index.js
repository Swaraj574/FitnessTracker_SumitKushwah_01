require("dotenv").config();
const express = require("express");
const mongoose =  require("mongoose")
const cors  = require('cors');
const app = express();
const port = 3000;
const MONGO_URL = process.env.MONGO_URL;
const userRoutes = require("./routes/user.js")


app.use(cors({
  origin: 'https://glittering-pithivier-f709d6.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data


app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use('/api/user/',userRoutes);


app.listen(port , ()=>{
  console.log(`server is runnig at ${port}`);
})

mongoose.connect(MONGO_URL)
.then(()=>console.log("connection secussfull"))
.catch((e)=> console.log(e))


app.get("/" , (req,res)=>{
  res.send("hey its me");
})