const express = require('express')
const dbSchema = require('../DB/dbSchema')
const router = express.Router()
const details = require('../DB/dbSchema')
let arr = []


router.get('/',async(req, res)=>{
    const data =await details.find()
    res.send(data)
})
router.get('/:id',async(req, res)=>{
    try{
        const id = +req.params.id
        const result  = await details.find({id:id})
        res.send(result)
    }
    catch(err){
        res.send(err)
    }
})
router.post('/',async(req,res)=>{
    try{
        const find = await details.find({id:req.body.id})
        if(find && (find.length>0)){
            throw 'duplicate element'
        }
    const result = await details.create(req.body)
    res.send({message:"added data successfully",result:result})
    }
    catch(err){
        res.send(err)
    }
})

router.get('/data',(req,res)=>{
    res.send([{name:'deepak'},{name:'mahesh'},{name:'himanshu'}])
})
router.delete('/',(req,res)=>{
    const newArr = arr.filter((element)=>{req.body.id !== element.id})
    arr=[...newArr]
    res.send(arr)
})
module.exports = router;