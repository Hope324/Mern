const express=require('express');
const app=express()
const cors=require('cors')

const bodyParser=require('body-parser')
const database=require('./DB/db')
database();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
const routes=require('./Router/routes')
app.use('/api/e2',routes)
app.listen(2002,()=>{
    console.log('listening to the port 2002')
})