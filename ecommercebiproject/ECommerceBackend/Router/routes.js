const { request } = require('express');
const express=require('express');
const router=express.Router()
const category=require('../DB/dbcategory')
const product=require('../DB/dbproduct')
const register=require('../DB/dbsignup')

//const arr=[]

router.post('/category/add',async(req,res)=>{
    try{
        
        const find = await category.find({name:req.body.name})
        if(find && (find.length>0)){
            throw 'duplicate element'
            
        }
    const result = await category.create(req.body)
    res.send({message:"added data successfully",result:result})
    }
    catch(err){
        res.send(err)
    }
})

router.post('/product/add',async(req,res)=>{
    try{
       
        const find = await product.find({name:req.body.name})
        if(find && (find.length>0)){
            throw 'duplicate element'
            
        }
    const result = await product.create(req.body)
    res.send({message:"added data successfully",result:result})
    }
    catch(err){
        res.send(err)
    }
})


router.get('/category/get',async(req,res)=>{
    
    // return
    const find = await category.find();
    
    //console.log(find)
    res.send(find);
})

router.get('/product/:category',async(req, res)=>{
    try{  
        //let obj="62af480f56b61cd0304dee87"  ; 
          
        const result  = await product.find({category:req.params.category})
        //console.log(result)
        res.send(result)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/modal/:id',async(req, res)=>{
    try{  
        //let obj="62af480f56b61cd0304dee87"  ; 
         
        const result  = await product.find({_id:req.params.id})
        //console.log(result)
        res.send(result)
        
    }
    catch(err){
        res.send(err)
    }
})
router.post('/register/add',async(req, res)=>{
    try{
        
        const find = await register.find({name:req.body.name})
        const find1=await register.find({email:req.body.email})
        const find2=await register.find({password:req.body.password})
        if(find && (find.length>0)){
            throw 'duplicate element'
            
        }
        if(find1 && (find1.length>0)){
            throw 'duplicate element'
            
        }
        if(find2 && (find2.length>0)){
            throw 'duplicate element'
            
        }
    const result = await register.create(req.body)
    res.send({message:"added data successfully",result:result})
    }
    catch(err){
        res.send(err)
    }
})

router.get('/login/get',async(req,res)=>{
    
    // return
    const find = await register.find();
    
    //console.log(find)
    res.send(find);
})
module.exports=router;