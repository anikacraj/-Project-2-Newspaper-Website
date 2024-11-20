const express = require("express");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');

const usersRegisterModal = require("./Models/usersRegister");
const contactMessageModal = require("./Models/Contact");
const HeaderNewsModal = require("./Models/HeaderNews");
const textModal = require("./Models/richTextEditor");
const SliderNewsModal = require("./Models/SliderNews");
const textMessageModal = require("./Models/Text");
const adminTextMessageModal = require("./Models/AdminText");
const adsSliderSchemaModel =require('./Models/AdsSliderImage');
const AdminLoginModel =require('./Models/AdminLogIn')


const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoDB = "mongodb://127.0.0.1:27017/SunriseNewspaper";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes for various operations

app.post("/register", (req, res) => {
  usersRegisterModal.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/register", (req, res) => {
  usersRegisterModal.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/contact", (req, res) => {
  contactMessageModal.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/contact", (req, res) => {
  contactMessageModal.find()
    .then((message) => {
      console.log(message);
      res.json(message);
    })
    .catch((err) => res.json(err));
});

app.post("/admin/:{category}/text", (req, res) => {
  textModal.create(req.body)
    .then((content) => res.json(content))
    .catch((err) => res.json(err));
});

app.post("/admin/:category/text", (req, res) => {
  const { category } = req.params; // Extract the dynamic parameter

  textModal
    .create({ ...req.body, category }) 
    .then((content) => res.json(content))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/admin/headernews", (req, res) => {
  HeaderNewsModal.create(req.body)
    .then((news) => res.json(news))
    .catch((err) => res.json(err));
});

app.get("/admin/headernews", (req, res) => {
  HeaderNewsModal.findOne().sort({ _id: -1 })
    .then((news) => res.json(news))
    .catch((err) => res.json(err));
});

app.put("/admin/headernews",(req,res)=>{
  const{ messageOne,messageTwo,messageThree,messageFour} =req.body;

  HeaderNewsModal.findOneAndUpdate({},{messageOne,messageTwo,messageThree,messageFour},{new:true,sort:{_id:-1}})
.then((updatedNews)=>res.json(updatedNews))
.catch((err)=>res.json(err));

})





app.post("/admin/adminTextSlider", (req, res) => {
  SliderNewsModal.create(req.body)
    .then((news) => res.json(news))
    .catch((err) => res.json(err));
});

app.put("/admin/adminTextSlider",(req,res)=>{
  const{newsOne,newsTwo,newsThree,newsFour} =req.body;

  SliderNewsModal.findOneAndUpdate({},{newsOne,newsTwo,newsThree,newsFour},{new:true,sort:{_id:-1}})
.then((updatedNews)=>res.json(updatedNews))
.catch((err)=>res.json(err));

})


app.get("/admin/adminTextSlider", (req, res) => {
  SliderNewsModal.findOne().sort({ _id: -1 })
    .then((news) => res.json(news))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  textMessageModal.create(req.body)
    .then((msgs) => res.json(msgs))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  textMessageModal.find()
    .then((msgs) => res.json(msgs))
    .catch((err) => res.json(err));
});

app.post("/admin/home", (req, res) => {
  adminTextMessageModal.create(req.body)
    .then((msgs) => res.json(msgs))
    .catch((err) => res.json(err));
});

app.get("/admin/home", (req, res) => {
  adminTextMessageModal.find()
    .then((msgs) => res.json(msgs))
    .catch((err) => res.json(err));
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email matches an admin
    const admin = await AdminLoginModel.findOne({ email: email });
    if (admin) {
      // Check if the password matches either the database password or the static password
      if (admin.password === password || password === "Sunrise,1234") {
        return res.json({ status: "success", role: "admin" });
      } else {
        return res.json({ status: "error", message: "Incorrect password for admin" });
      }
    }

    // Check if the email matches a user (only if admin is not found)
    const user = await usersRegisterModal.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        return res.json({ status: "success", role: "user" });
      } else {
        return res.json({ status: "error", message: "Incorrect password for user" });
      }
    }

    // If neither admin nor user exists
    return res.json({ status: "error", message: "User not found" });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ status: "error", message: "Internal server error" });
  }
});




// Image upload configuration using Multer

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static("uploads"));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload slider images
app.post("/uploadSliderAds", upload.array("image", 3), async (req, res) => {
  try {
    if (!req.files || req.files.length !== 3) {
      return res.status(400).json({ message: "Please upload exactly 3 images." });
    }

    const imagePaths = req.files.map((file) => file.filename);
    console.log("Received image paths:", imagePaths); // Debugging line

    const adsSliderData = new adsSliderSchemaModel({
      ImageOne: imagePaths[0],
      ImageTwo: imagePaths[1],
      ImageThree: imagePaths[2],
    });

    await adsSliderData.save();
    res.status(200).json({ message: "Images uploaded successfully!", data: adsSliderData });
  } catch (error) {
    console.error("Error in /uploadSliderAds:", error); // Log full error
    res.status(500).json({ message: "Error uploading images.", error });
  }
});

app.get("/uploadSliderAds", async (req, res) => {
  try {
    const adsSliderImages = await adsSliderSchemaModel.findOne().sort({ timestamp: -1 }); 
    res.status(200).json(adsSliderImages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images.", error });
  }
});


// Start server
app.listen(3004, () => {
  console.log(`Server connected at http://localhost:3004`);
});
