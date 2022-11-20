/* In this file we used the mongoose libraries and have also defined the keywords' type and whether they are required to be filled or not */
const mongoose = require("mongoose");  
const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    } ,
    password:{
        type:String,
        required:true
    }, 
    confirmpassword:{
        type:String,
        required:true
    }  
})

const Register=new mongoose.model("Register",employeeSchema);
module.exports=Register;