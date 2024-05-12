

const Users = require("../Modal/UserChema")


const createTopics = async(req,res,next)=>{
    try {
      const {topics,userId} = req.body
    
  
   let updateOne =  await  Users.updateOne({_id:userId},{$set:{topics:topics}})
  
       res.status(200).json({data:updateOne,message:"updated successfully"})
        
    } catch (error) {
        res.status(400).json({message:"some thing went  wrong",error:error})
    }
}

module.exports = createTopics