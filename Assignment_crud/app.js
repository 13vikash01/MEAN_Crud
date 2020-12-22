const express           = require('express')
const bodyParser        = require('body-parser')
const flash             = require('connect-flash')
const Employee          = require("./model/employee")
const app               = express()
const methodoverride    = require('method-override')
var cors                = require('cors');


//Requiring Routes
var   indexRoutes       = require("./routes/index")



//===== USES ==============
//app.use(flash());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"))

app.use(methodoverride("_method"));


//Mongo setup

const mongoose = require('mongoose');
const { Db } = require('mongodb');
mongoose.connect('mongodb://localhost:27017/employee_DB_v1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));




//=======ROUTES=================//

// //Middleware
// app.use(function(req,res,next){
//    res.locals.error = req.flash("error");
//    res.locals.success = req.flash("success");
//    next();
// })

app.use("/employees",indexRoutes);



app.listen(4444,()=>{
    console.log("server started at 4444.")
})