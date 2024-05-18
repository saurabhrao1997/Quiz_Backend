const express = require('express')
const app = express()
const mongoConnection = require("./MongoDb/MongoConnection")
const cors = require("cors")
const port = process.env.PORT || 3000
require("dotenv").config()

// route import 
const register = require("./Routes/Register")
const login = require("./Routes/LoginRoutes")
const topics = require("./Routes/TopicsRoute")
const result = require("./Routes/ResultRoutes")
// middleWare
const bodyParser = require("body-parser")
app.use(cors({origin:"http://localhost:5173"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use((error,req,res,next)=>{
    
//     error.statusCode = error?.statusCode || 500;
//     error.message = error?.message || "some thing went wrong"
//     error.extraDetails = error?.extraDetails || "error"
//    return res.status(error.statusCode).json({
//         status:error.statusCode,
//         Message:error.message,
//         Details:error.extraDetails
//     })
// })



// app.post('/api/v1/register', (req, res) => {
//     console.log("req",req.body)
//   res.status(200).json({data:req.body})
// })



// call database
mongoConnection()

// routes
app.get("/",(req,res)=>{
   res.send("Hello welcome to my heroku page")
})
app.get("/home",(req,res)=>{
  res.send("Hello welcome to my heroku home page")
})
app.get("/about",(req,res)=>{
  res.send("Hello welcome to my heroku about page")
})

// app.use("/api/v1",register)
// app.use("/api/v1",login)
// app.use("/api/v1",topics)
// app.use("/api/v1",result)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})