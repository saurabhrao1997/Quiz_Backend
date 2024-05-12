const Users =require("../Modal/UserChema")

const resultUpdate = async(req,res,next)=>{
    try {

let updatedUser = await Users.updateOne({_id:req.body.userId},{$set:{result:req.body.data}})
        res.status(200).json({data:updatedUser})
    } catch (error) {
        res.status(400).json({message:"some thing went wrong"})
    }
}

module.exports = resultUpdate