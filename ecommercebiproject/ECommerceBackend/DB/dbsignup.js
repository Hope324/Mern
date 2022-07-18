const mongoonse = require('mongoose')
const dbsignup = new mongoonse.Schema(
    {
        
        name:{
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
        isadmin:{
            type:String,
            required:true 
        }
        
        
    }
)

module.exports = mongoonse.model('Register',dbsignup)


