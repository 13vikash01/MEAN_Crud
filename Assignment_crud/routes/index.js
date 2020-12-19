var express  = require("express");
var router   = express.Router();
var Employee  =  require("../model/employee");


//getting all employees 

router.get('/all',(req,res)=>{

    Employee.find({},function(err,data){
        if(err)
        {
           console.log("Something went wrong")
        }
        else
        {
            res.send(data);
        }
    })
   
})

//=========taking data from the form====

router.post('/new',(req,res)=>{
    var name = req.body.name;
    var salary = req.body.salary;
    var skill = req.body.skill;
    var dob = req.body.dob;
   
    var new_employee = new Employee({name:name,salary:salary,skill:skill,dob:dob});
    new_employee.save((err,emp)=>{
        if(err)
        {
            res.send(err)
        }
        else{
               res.status(200).json({msg:emp});
        }
    })
})





//=================== show page for description of particular employee==========

router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,foundemp)=>{
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(foundemp);
        }   
    })
})



//UPDATE ROUTE

router.put('/edit', (req,res)=>{
    Employee.findById(req.body._id,(err,foundemp)=>{
        if(err)
        {
            res.send(err);
        }
        else
        {
            foundemp.name = req.body.name;
            foundemp.salary = req.body.salary;
            foundemp.skill = req.body.skill;
            foundemp.dob = req.body.dob;
            foundemp.save((err,emp)=>{
                if(err)
                {
                    res.send(err)
                }
                else{
                       res.send(emp);
                }
            })
        }   
    })   
})

// ================Delete Employee=========
router.delete('/delete/:id',(req,res)=>{
   Employee.findByIdAndRemove(req.params.id,(err)=>{
       if(err)
       {
           res.send("error");
       }
       else
       {
           res.send("deleted!!");
       }
   })

})



module.exports = router;