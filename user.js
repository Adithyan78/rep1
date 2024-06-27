const mongoose = require('mongoose'); //adding data to database

const schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})

const usermodel = mongoose.model("user",schema);
module.exports = usermodel;

