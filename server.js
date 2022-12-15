const express= require("express")
 const { connection } = require("./config/db")
const { userRouter } = require("./Router/user.router")

const app=express()
require("dotenv").config()

const PORT=process.env.PORT || 8500


app.use(express.json())

app.get("/",async(req,res)=>{
  res.send("welcome")
})

app.use("/user",userRouter)

app.listen(PORT,async()=>{
  try{
    await connection
    console.log("db is connet")
  }
  catch(err){
    console.log("db is fail")
    console.log(err)
  }
  console.log(`${PORT} is Running suuceesfull`)
})
