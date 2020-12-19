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
     skill:{
         type:String
     }
})


module.exports=mongoose.model('Employee',EmployeeSchema)