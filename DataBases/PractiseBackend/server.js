// function abc(){
//     console.log('hello boss')
    
// }

// abc()

const express=require('express');
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
require('./DB/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
const routes=require('./Router/routes')
app.use('/api/v2',routes)

app.listen(2000,()=>{
    console.log('Listing the port boys!')
})
