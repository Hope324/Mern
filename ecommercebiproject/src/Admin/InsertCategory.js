import React, { useState } from 'react'
import axios from 'axios'
import Adminlist from './Adminlist'

function InsertCategory() {
    // const[name,setName]=useState('');
    // const[image,setImage]=useState('');
    const [state, setState] = useState({
        name: "",
        image: "",
      });

      // function handleChange(event) {
      //   const value = event.target.value;
      //   setState({
      //     ...state,
      //     [event.target.name]: value,
      //   });
      // }
    const { name, image } = state;

  const handleChange = name => event => {
    setState({ ...state,[name]: event.target.value });
  };
    const addcategory=()=>{
        axios.post('http://localhost:2002/api/e2/category/add', {
            name:name,
            image:image
  
          })
            .then(function (response) {
                alert('data added succesfully')
  
                setState({
                  name: "",
                  image: "",
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
<Adminlist/>
    <div className='container'>
        <div className='row justify-content-center' >
                <div className='col-md-5 mt-5 shadow-lg bg-white rounded'>
                    <h2 className='h-2 text-center m-2'>Insert Category</h2>
                    <div className='my-3 m-2'>
                        
                        <input type="text" placeholder='Name' className='form-control' 
                        value={name} onChange={handleChange("name")}/>

                        <input type="text" placeholder='Image' className='form-control' 
                        value={image} onChange={handleChange("image")}/>
                        
                        <button className='btn btn-danger mt-3' onClick={addcategory}>INSERT</button>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default InsertCategory