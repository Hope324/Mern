const mongoonse = require('mongoose')
const dbSchema = new mongoonse.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoonse.model('details',dbSchema)