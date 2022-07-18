import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
function Navbar() {

  const myState = useSelector((state) => state.cart);
  const navigate = useNavigate();
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:2002/api/e2/category/get`)
      .then(function (response) {
        setCategory(response.data)
        console.log(response.data)
        console.log('hope')
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">E-Commerce</a>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">

              <a href="#" class="nav-item nav-link active" onClick={() => { navigate(`/`) }}>Home</a>

              {category.map(data =>
                <a href="#" class="nav-item nav-link active" onClick={() => { changeLocation(`/product/${data.name}`) }}>{data.name}</a>
              )}
              
              <a href="#" class="nav-item nav-link active">Contact</a>
              <a href="#" class="nav-item nav-link active">About Us</a>
            </div>
            
            <div class="navbar-nav ms-auto">
              <a className="nav-item nav-link active" href='#' onClick={() => { navigate(`/Login`) }}>Login</a>

              <a className="nav-item nav-link active" href='#' onClick={() => { navigate(`/SignUp`) }}>SignUp</a>



              <a className="nav-item nav-link active" href='#' onClick={() => { navigate('/cart') }}><FaShoppingCart /><span className='mx-2 fs-6'>{myState.cartItems.length}</span></a>

            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar