const express = require('express');
const mongoose = require('mongoose');
const Player = require('./model/player')
//promise is for asynchronous
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean')
.then(()=>{console.log('connection successsfull')})
.catch((err)=>{console.log('err is connection')})

let player = new Player({ "_id":2,"name":" Kohli","age":29})
player.save((err)=>{
    if(err)
    console.log('error in saving');
    else
    console.log('player saved')
})
\\
//select * from players in my sql 
Player.find({}).exec((err,players)=>{
    console.log(players)
})