import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus,FaStar } from 'react-icons/fa'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ProductDetails from './Productdetails'
function Product() {
 
  const [product, setProduct] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2002/api/e2/product/${name}`)
      .then(function (response) {
        setProduct(response.data)
        console.log(response.data)
        console.log('hell is real')

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  const visible = () =>
  { 
      
      
      document.getElementById('star1').style.visibility = "hidden";
      
  }
  return (
    <>
      <div className='row'>

      {product.map(data => {
                    return <div className='col-sm-4 rounded' >
                            {/* <pizza pizza={pizza} /> */}
                            
                            {/* <Pizza pizza={pizza}/> */}
                            <ProductDetails Productinfo={data}/>
                        </div>

                    
                })}
      </div>
      
      
      
    </>
    
  )
}

export default Product