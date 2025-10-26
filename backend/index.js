const express = require('express');
const {router}  = require('./routes/route.js');
const { database } = require('./database/db..js');
const env = require('dotenv').config();
const cors = require('cors')

const app = express();
const port = process.env.port;
app.use(express.json())
database()
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/api',router)

app.listen(port,(req,res)=>{
    console.log(`server started on : ${port}`)
})
