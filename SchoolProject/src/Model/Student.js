const mongodb=require("mongoose")
const Student=new mongodb.Schema({
    user_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    type:{
        type:String,
        default:"Student"
    }
    
})
const Students=mongodb.model("student",Student);
module.exports=Students