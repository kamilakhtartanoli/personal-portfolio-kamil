const { default: mongoose } = require("mongoose")

const database = async ()=>{
const url =  process.env.mongodburl
    await mongoose.connect(url)
    .then(()=>{
        console.log('database-connected-successfully')
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    database
}