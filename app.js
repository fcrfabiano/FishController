const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const api = require('./api/api')
const path = require('path')

let db = mongoose.connection;

db.on("error", ()=>{
    console.log("Houve um erro")
})

db.once("open", ()=>{
    console.log("Data Base Loaded")
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect("mongodb+srv://test:test@cluster0.ouyuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})

app.use("/", api)

app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`)
})