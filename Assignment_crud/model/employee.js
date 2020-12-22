const mongoose=require('mongoose')


const EmployeeSchema=new mongoose.Schema({

      name:{
             type:String,
      },
      salary:{
          type: Number,
      },
     dob :{
        type: String,
     },
     Mongodb:{
         type:Number
     },
     Express:{
        type:Number
    },
    Node:{
        type:Number
    },
    image:{
        type:String
    }
})


module.exports=mongoose.model('Employee',EmployeeSchema)