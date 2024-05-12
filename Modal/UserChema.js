

const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    result:  [ {
        totalPoints:{
            type:Number,
            default:20
        },
        totalQuestions:{
            type:Number,
            default:10
        },
        totalAttempt:{
        type:Number,
        default:0
    },
    totalEarnPoint:{
        type:Number,
        default:0
    },
    result:{
        type:String,
    
        
    }}],
    topics:[{
        label:{type:String},
        value:{type:Number}
    }]

},{timeStamp:true})

userSchema.pre("save", async function (next){
    if(this.isModified("password")){
     const salt  = await bcrypt.genSalt()
     console.log("pre",this.password,salt)
     this.password  = await bcrypt.hash(this.password,salt)
     this.confirmPassword  = await bcrypt.hash(this.confirmPassword,salt)
    }
   
      next()
   })

const Users = mongoose.model("User",userSchema)
module.exports = Users