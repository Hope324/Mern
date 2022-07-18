import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { FaPlus, FaMinus,FaStar } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AddToCart, RemoveFromCart } from '../Redux/cartAction';


function ProductinfoDetails(Productinfo) {
    const [show, setShow] = useState(false);
    const myState = useSelector((state) => state.cart);
   const navigate=useNavigate();

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () =>
    { 
        
        setShow(true);
        
        
    }
    const visible=()=>{
        
        document.getElementById('star1').style.visibility = "hidden";
        document.getElementById('hi').style.visibility = "hidden";
    }
    const addtocart = (item) => {

        dispatch(AddToCart(item))

    }
    const removefromcart = (item) => {

        dispatch(RemoveFromCart(item))

    }
    const cartItem = myState.cartItems.find(x => x._id === Productinfo.Productinfo._id)
    const quantity = cartItem ? cartItem.quantity : 0
    return (
        <>



            <div className="shadow-lg p-2 mb-5 bg-white rounded m-5">
                <div onClick={()=>{navigate(`/modal/${Productinfo.Productinfo._id}`)}}>
                    <h4 className='mx-2'>{Productinfo.Productinfo.name}</h4>
                    <img
                        src={Productinfo.Productinfo.image} alt='hii' className='img-fluid mx-2' style={{ height: '20rem', width: '20rem' }} />
                </div>

                <h6 className="h6 mx-2 text-end">Rs-:{Productinfo.Productinfo.price}</h6>
                
               
                <button className='btn btn-light btn-sm ms-2' onClick={() => addtocart(Productinfo.Productinfo)}><FaPlus className='text-success' /></button><span className='justify-content-center'>
                    {quantity}
                </span><button className='btn btn-light btn-sm' onClick={() => removefromcart(Productinfo.Productinfo)}><FaMinus className='text-danger' /></button>





            </div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{Productinfo.Productinfo.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img
                        src={Productinfo.Productinfo.image} alt='hii' className='img-fluid mx-2' style={{ height: '20rem', width: '20rem' }} />
                        <p className='mx-2 text-muted'>{Productinfo.Productinfo.description}</p>
                         <span className='mx-2'>
                         
                         <FaStar className='text-warning' id='star1'/>
                         <FaStar />
                         <FaStar/>
                         <FaStar/>                            
                         <FaStar/>
                         </span>
                         {/* <button id="hi">hope</button> */}
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-danger' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductinfoDetails