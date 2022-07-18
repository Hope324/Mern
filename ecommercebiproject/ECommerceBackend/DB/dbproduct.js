const mongoonse = require('mongoose')
const dbProduct = new mongoonse.Schema(
    {
        
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
    }
)

module.exports = mongoonse.model('Product',dbProduct)


