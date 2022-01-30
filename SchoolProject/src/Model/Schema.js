const mongodb=require("mongoose")
const Student=new mongodb.Schema({
    user_name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    }
    
})