// 1.import express

var express = require('express');
require('./connection')
const user = require('./user');

//2.initilization
 var app = express();

 //middleware

 app.use(express.json());

 //3.api
 app.get('/',(req,res)=>{


    res.send("hello");
 })
 app.get('/login',(req,res)=>{
    res.send("welcome you have logged successfully")
 })

 // to add data to db
app.post('/add',async(req,res)=>{
    try{
        console.log(req.body);
        await user(req.body).save();
        res.send({messsage:"data added successfully"})

    }catch (error){
        console.log(error)

    }
})

// to view all the users

app.get('/view',async(req,res)=>{
    try{
        const data = await user.find();
        res.send(data);

    }catch (error){
        console.log(error)
    }
})

// to delete a data of a user

app.delete('/remove/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
       await user.findByIdAndDelete(req.params.id);
        res.send({messsage:"deleted"})
    }catch (error){
        console.log(error)
    }}
)

//to update data of a user
app.put('/edit/:id',async(req,res)=>{
    try{
        var data = await user.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:'update successfull',data})
    } catch (error){
        console.log(error)
    }
});

 
 //4.port allocation

 app.listen(3002,()=>{
    console.log("port is up and running")

 })