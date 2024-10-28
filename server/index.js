const express =require("express")

var mongoose = require('mongoose');
const cors =require("cors")
const usersRegisterModal = require('./Models/usersRegister')
const contactMessageModal =require('./Models/Contact')
const HeaderNewsModal =require ('./Models/HeaderNews')
const textModal =require('./Models/richTextEditor');
const SliderNewsModal=require('./Models/SliderNews');
const app = express()
app.use(express.json())
app.use(cors());

var mongoDB = "mongodb://127.0.0.1:27017/SunriseNewspaper";
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post ("/register",(req,res)=>{
    usersRegisterModal.create(req.body)
.then(users => res.json(users))
.catch(err => res.json(err))
});




app.post ("/contact",(req,res)=>{
    contactMessageModal.create(req.body)
    
.then(users => res.json(users))
.catch(err => res.json(err))
});

app.post ("/texteditor",(req,res)=>{
    textModal.create(req.body)
.then(content => res.json(content))
.catch(err => res.json(err))
});

app.get ("/texteditor",(req,res)=>{
    textModal.find()
.then(content => res.json(content))
.catch(err => res.json(err))
});


app.post("/admin/headernews",(req,res)=>{
    HeaderNewsModal.create(req.body)
    .then(users =>res.json(users))
    .catch(err => res.json(err))


});



app.post("/admin/adminTextSlider",(req,res)=>{
    SliderNewsModal.create(req.body)
    .then(users =>res.json(users))
    .catch(err => res.json(err))
});

app.get("/register",(req,res)=>{
    usersRegisterModal.find()
    .then (users=> res.json(users))
    .catch(err=> res.json(err))
})

app.get("/contact", (req, res) => {
    contactMessageModal.find()
      .then(message => {
        console.log(message); 
        res.json(message);
      })
      .catch(err => res.json(err));
  });
  

app.get("/admin/headernews",(req,res)=>{
    HeaderNewsModal.findOne().sort({ _id: -1 })
    .then(news => res.json(news))
    .catch(err => res.json(err))
});

app.get("/admin/adminTextSlider",(req,res)=>{
    SliderNewsModal.findOne().sort({ _id: -1 })
    .then(news => res.json(news))
    .catch(err => res.json(err))
});



app.post("/login",(req,res)=>{
 const {email,password} = req.body;
 usersRegisterModal.findOne({email :email})
 .then(user =>{
    if(user){
        if(user.password === password){
            res.json("success")
 
        }
        else{
            res.json("the passoword is incorrect");
        }
    }
 })   
})

app.listen(3004 ,()=>{
    console.log(`server connected at http://localhost:3004`)
})