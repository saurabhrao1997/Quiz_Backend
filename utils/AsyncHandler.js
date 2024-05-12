const asyncHandler = (fn)=> async(req,res,next)=>{
    try {
       await fn(req,res,next)

    }catch(err){
       res.status(400).json({message:"some thing went wrong",details:err})
    }
}