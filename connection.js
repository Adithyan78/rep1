// 1. mongoose import

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://adithyanb38:thomaskutty@cluster0.qn0iohi.mongodb.net/openchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db");
})
    .catch((error)=>{
        console.log("error")
    }
)

