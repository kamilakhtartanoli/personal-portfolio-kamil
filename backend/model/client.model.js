const mongoose = require('mongoose')

const clientschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
    },
    email:{
        type:String,
        required:[true,'please enter you email']
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const client = mongoose.model('client',clientschema)

module.exports = {
    client
}