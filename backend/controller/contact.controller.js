const { client } = require("../model/client.model")

const contact = async (req,res)=>{
try {
    const {name , email , message} = req.body
    const newclient = await client.create({
        name,email,message
    })
    res.status(200).json({message:"feedback sent" , newclient})
} catch (error) {
    res.status(500).json({message:error.message})
}
}

module.exports = {
    contact
}