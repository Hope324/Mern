import React from 'react'
import { useNavigate } from 'react-router-dom'

function Adminlist() {
    const navigate=useNavigate();
    return (
        <>
            <div className='container mt-5'>
                <ul class="list-group list-group-horizontal  justify-content-center">

                    <li class="list-group-item" style={{cursor:'pointer'}} onClick={()=>{navigate(`/InsertProduct`)}}>Add Product</li>
                    <li class="list-group-item" style={{cursor:'pointer'}} onClick={()=>{navigate(`/InsertCategory`)}}>Add Category</li>
                    
                </ul>
            </div>
        </>
    )
}

export default Adminlist