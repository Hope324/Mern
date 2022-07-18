import {React,useState} from 'react'
import { FaPlus,FaMinus,FaTrash } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {DeleteFromCart,ClearCart,RemoveFromCart} from '../Redux/cartAction'
import { AddToCart } from '../Redux/cartAction'


function Cart() {
  const history=useNavigate();
  const myState=useSelector((state)=> state.cart);
  
  const dispatch=useDispatch()
  const addtocart=(item)=>{
    dispatch(AddToCart(item))
 
   }
   const removefromcart=(item)=>{
    dispatch(RemoveFromCart(item))
 
   }
  // const[nvalue,setnValue]=useState(1)
  console.log(myState)
  return (
    <>
   

<div class="container">
   <p className='h2 mx-4 my-4 text-center'>My Cart</p>
   </div>
         {myState.cartItems.map(data=>


  <div className='d-flex container'>

<div className='text-start ms-5 w-100'>
  <p className='h4'>{data.name}</p>
  
  <p className='text-muted'>{data.description}</p>
  <p className='h6'>Rs/-{data.quantity*data.price}</p>
   
  <button className='btn btn-light btn-sm' onClick={()=>addtocart(data)}><FaPlus className='text-success'/></button><span className='justify-content-center'>{data.quantity}</span><button className='btn btn-light btn-sm' onClick={()=>removefromcart(data)}><FaMinus className='text-danger'/></button>
   <br></br>
  <FaTrash className='text-danger' onClick={()=>{dispatch(DeleteFromCart(data._id))}}/>
  <hr></hr>
</div>

<div className='w-100'>
  <img src={data.image} alt='' className='img-fluid mx-2 my-2' style={{ height: '150px', width: '15rem' }} />
</div>
<hr></hr>



</div>


  )}
<div class="text-center">
<button className='btn btn-danger btn-sm' onClick={()=>{dispatch(ClearCart(myState.cartItems));{history('/')}}}>Order</button>
</div> 
    </>
    

  )
}

export default Cart