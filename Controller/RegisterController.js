
const Users = require("../Modal/UserChema")
const jwt = require("jsonwebtoken")

const CreateRegister = async (req, res,next) => {
  console.log("req", req.body);
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    if (!(firstName && lastName && email && password && confirmPassword)) {
        return res.status(401).json({ message: `all filed are required` });
    //     const Error ={
    //         statusCode:404,
    //         message:"all field are required",
    //         extraDetails:""
    //     }
    //  return   next(Error)
      }

      if (( password !== confirmPassword)) {
        return res.status(401).json({ message: `password and confirm password not matched` });
    //     const Error ={
    //         statusCode:404,
    //         message:"all field are required",
    //         extraDetails:""
    //     }
    //  return   next(Error)
      }


      let user = await Users.findOne({ email });

      console.log("user", user);
      if (user) {
        return res.status(400).send({ message: "User is already exist" });
      //   const Error ={
      //       statusCode:404,
      //       message:"User is already exist",
      //       extraDetails:"please sign in"
      //   }
      //  return next(Error)
      }

      let newUser = new Users({
        firstName: firstName,
        lastName: lastName,
       
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      let saveUser = await newUser.save();
      newUser.password =null
      newUser.confirmPassword = null
      res.status(200).json({ data: newUser,response:saveUser});
    
  } catch (error) {
    // res.status(404).json({message:"some thing went rong",error:error})
    const Error ={
        statusCode:404,
        message:"something went wrong",
        extraDetails:error
    }
  return  next(Error)
  }

};

const getRegisteruser = async (req,res,next)=>{
    try {
      console.log("query",req.query)

      let findusrr = await Users.findOne({_id:req.query.id})
      findusrr.password = null
      findusrr.confirmPassword = null
      res.status(200).json({message:"got",bb:findusrr})
    } catch (error) {
      res.status(400).send("errororor")
    }
}




module.exports = {CreateRegister,getRegisteruser};
