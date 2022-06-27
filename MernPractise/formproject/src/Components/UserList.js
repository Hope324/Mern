// import React from 'react';
import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "bootstrap/dist/css/bootstrap.min.css";


function UserList() {
  const Name=document.getElementById('Name').Value;
  const Password=document.getElementById('Password').Value;
    const [productList,setProductList]= useState([])
  
  const addProduct=()=>{
  const localProductList=[...productList]
  localProductList.push({
  Name1:Name,
  Password1:Password,
  })
  
  setProductList(localProductList)
  }
  return (
    <>
    
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 p-1">
              <div className="card">
                <div className="card-body">
                  <div class="input-group mb-3">

                    <input type="text" class="form-control" id="Name" placeholder="Username" />
                  </div>
                  <div class="input-group mb-3">

                    <input type="text" class="form-control" id="Password" placeholder="Password" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {
     productList.map((product)=>
      
   ( <UserInfo productData={product} randomAttrib={100}/>
   ))
    }

    <button onClick={addProduct} className="btn btn-primary">Add New</button>
    </>
  )
 
  
}

export default UserList;