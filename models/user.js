const mongoose = require('mongoose');


const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // minlength:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        // trim:true,
        // minlength:3,

    },
    password:{
        type:String,
        required:true,
        // minlength:6,
        // trim:true
    },
    role:{
        type:String,
        required:true,
        // default:'user',
        enum:["Admin","Student","Visitor"]
    }
});


module.exports = mongoose.model("user",userSchema);