const express =require("express")

var mongoose = require('mongoose');
const cors =require("cors")
const EmployeeModal = require('./Models/Employee')


const app = express()
app.use(express.json())
app.use(cors());
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/employee';
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post ("/register",(req,res)=>{
EmployeeModal.create(req.body)
.then(employees => res.json(employees))
.catch(err => res.json(err))
})

app.post("/login",(req,res)=>{
 const {email,password} = req.body;
 EmployeeModal.findOne({email :email})
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