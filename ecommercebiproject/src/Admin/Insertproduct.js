import React, { useState } from 'react'
import axios from 'axios'
import Adminlist from './Adminlist'

function Insertproduct() {
  const [state, setState] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    rating: "",
    description: "",

  });
  const { name, image, price, category, rating, description } = state;

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };
  const addproduct = () => {
    axios.post('http://localhost:2002/api/e2/product/add', {
      name: name,
      image: image,
      price: price,
      category: category,
      rating: rating,
      description: description,
      quantity: "0"

    })
      .then(function (response) {
        alert('data added succesfully')

        setState({
          name: "",
          image: "",
          price: "",
          category: "",
          rating: "",
          description: "",
        });



      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert('data not added')
      })
  }

  return (
    <>
      <Adminlist />
      <div className='container'>
        <div className='row justify-content-center' >
          <div className='col-md-5 mt-3 shadow-lg bg-white rounded'>
            <h2 className='h-2 text-center m-2'>Insert Product</h2>
            <div className='my-3 m-2'>

              <input type="text" placeholder='Name' className='form-control'
                value={name} onChange={handleChange("name")} />

              <input type="text" placeholder='Image' className='form-control'
                value={image} onChange={handleChange("image")} />

              <input type="text" placeholder='Price' className='form-control'
                value={price} onChange={handleChange("price")} />

              <input type="text" placeholder='Category' className='form-control'
                value={category} onChange={handleChange("category")} />

              <input type="text" placeholder='Rating' className='form-control'
                value={rating} onChange={handleChange("rating")} />

              <textarea value={description} class="form-control my-2" onChange={handleChange("description")}
               placeholder='Descripton' rows="3"></textarea>


              <button className='btn btn-danger mt-1' onClick={addproduct}>INSERT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Insertproduct
