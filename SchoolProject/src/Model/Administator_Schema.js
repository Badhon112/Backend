const mongodb=require("mongoose")
const University=new mongodb.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        
    },
    User_Name:{
        type:String,
        require:true
    }

})
const Teacher=mongodb.model("All_Teacher",University)
module.exports=Teacher;