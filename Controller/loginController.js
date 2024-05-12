const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../Modal/UserChema")
const Login = async (req, res,next) => {
  console.log("req", req.body);
  const { email, password } = req.body;
  const newUser = await Users.findOne({ email });

  if (!newUser) {
    return res.status(400).send({ message: "User is not found please do registration" });
  //   const Error ={
  //       statusCode:404,
  //       message:"email or password are not valid",
  //       extraDetails:""
  //   }
  //  return next(Error)
  }
  if (!(await bcrypt.compare(password, newUser.password))) {
    return res.status(400).send({ message: "email or password are not valid" });
  //   const Error ={
  //       statusCode:404,
  //       message:"password not matched",
  //       extraDetails:"reset your password"
  //   }
  //  return next(Error)
  }
  if (await bcrypt.compare(password, newUser.password)) {
    const token = jwt.sign(
      {
        id: newUser._id,
        newUser,
      },
      process.env.SECREATE_KEY,
      {
        expiresIn: "1d",
      }
    );

    const option = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httponly: true,
    };
    newUser.password = null
    newUser.confirmPassword    = null
    return res
      .status(200)
      .cookie("token", token, option)
      .json({
        data: { data: newUser, token: token },
        message: "successfully done",
      });
  }
};

module.exports = Login;
