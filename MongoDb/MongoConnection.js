const mongoose = require("mongoose");



const  mongoConnection = ()=>{
    try {

        mongoose.connect("mongodb+srv://sau:Saurabh123@cluster0.nhyqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
            console.log("MongoDb connection done")
        }).catch(()=>{
            console.log("MongoDb connection failed")
        })
        
    } catch (error) {
        console.log("errr",error)
    }
}

module.exports = mongoConnection