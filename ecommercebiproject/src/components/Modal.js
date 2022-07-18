import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


function Modal() {
    const [modal, setModal] = useState([])
    const { id} = useParams();
    const navigate=useNavigate();
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:2002/api/e2/modal/${id}`)
            .then(function (response) {
                setModal(response.data)
                console.log('rating')
                const rating=response.data[0].rating;
                if(rating==="4")
                {
                    document.getElementById('star1').style.visibility='hidden';
                }
                if(rating==="3")
                {
                    document.getElementById('star1').style.visibility='hidden';
                    document.getElementById('star2').style.visibility='hidden';
                }
                if(rating==="2")
                {
                    document.getElementById('star1').style.visibility='hidden';
                    document.getElementById('star2').style.visibility='hidden';
                    document.getElementById('star3').style.visibility='hidden';
                }
                if(rating==="1")
                {
                    document.getElementById('star1').style.visibility='hidden';
                    document.getElementById('star2').style.visibility='hidden';
                    document.getElementById('star3').style.visibility='hidden';
                    document.getElementById('star5').style.visibility='hidden';
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    
    return (
        <>
            {modal.map(data =>
                <div style={{
                    height: '37.59rem', backgroundImage: "url(https://images.unsplash.com/photo-1600303881706-b8a373dc73c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)"
                    , backgroundSize: 'Cover',
                    backgroundRepeat: 'no-repeat', overflow: 'hidden'
                }}>


                    <div className='row justify-content-center mx-5' >
                        <div className='col-md-5 mt-5 shadow-lg bg-white rounded'>
                            <h2 className='h-2 text-start m-2'>{data.name}</h2>
                            <div className=' m-2'>
                                <img
                                    src={data.image} alt='hii' className='img-fluid mx-3' style={{ height: '20rem', width: '25rem' }} />
                                <p className='mx-2 text-muted'>{data.description}</p>
                                <span className='mx-2'>

                                    <FaStar className='text-warning' id='star5' />
                                    <FaStar className='text-warning' id='star4'/>
                                    <FaStar className='text-warning' id='star3'/>
                                    <FaStar className='text-warning' id='star2'/>
                                    <FaStar className='text-warning' id='star1'/>
                                </span>
                                <hr></hr>
                                <button className='btn btn-danger my-1 btn-sm' onClick={()=>{navigate(`/product/${data.category}`)}}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            )}



        </>
    )
}

export default Modal