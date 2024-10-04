const mongoose = require ('mongoose')
const express = require ('express')
const router = require('./routes/routes')

const app = express();
const port = 5000;

mongoose.connect(process.env.MongoDB)
.then(()=>{console.log("server connected");})
.catch((e)=>{console.log(e);})

app.use('/',router)

app.listen(port, ()=>{console.log(`server is running on -${port}`)})