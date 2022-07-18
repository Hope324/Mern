import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Categories() {
  const [category, setCategory] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:2002/api/e2/category/get`)
      .then(function (response) {
        setCategory(response.data)
        console.log(response.data)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[])
  // const fetchdata = () => {
    
  // }
  return (
    <>
<h4 className='text-center my-2'>Categories</h4>
      <div className='row'>
      
        {category.map(data => 
          <div className='col-sm-4' onClick={()=>{navigate(`/product/${data.name}`)}}>
            <div className="shadow-lg p-2 mb-5 bg-white rounded m-5">
              <h4 className='mx-2'>{data.name}</h4>
              <img
                src={data.image} alt='hii' className='img-fluid mx-2' style={{ height: '20rem', width: '20rem' }} />


            </div>


          </div>
        )}


      </div>
    </>
  )
}

export default Categories