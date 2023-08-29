const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const autoRouter = require("./autoRouter");
const app = express();

app.use(express.json());
app.use('/auth', autoRouter);

const start = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://tishkevich03:qwert12345@cluster0.bv3k4w3.mongodb.net/?retryWrites=true&w=majority");
        app.listen(PORT,()=>{
            console.log("Server stared")
        })
    }catch (e) {
        console.log(e);
    }
}
start();
