import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


function Popup() {
    const [modal, setModal] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                setModal(response.data)
                console.log('rating')

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            
            <div style={{
                    height: '37.59rem', backgroundImage: "url(https://images.unsplash.com/photo-1600303881706-b8a373dc73c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)"
                    , backgroundSize: 'Cover',
                    backgroundRepeat: 'no-repeat'
                     , overflow: 'hidden'
                }}>


                    <div className='row justify-content-center mx-5' >
                        <div className=' mt-5 shadow-lg bg-white rounded' style={{height:'30rem',width:'55rem'}}>
                            <div style={{height:'28rem',overflowY:'scroll'}}>

                           

                                <table class="table-bordered border-dark mx-2 my-2">

                                    <thead>
                                        <tr>
                                            
                                            <th className='w-25'>Name</th>
                                            <th className='w-75'>comments</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {modal.map(data =>
                                        <tr>
                                            
                                            
                                            <td className='w-25'>{data.email}</td>
                                            <td className='w-75'>{data.body}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>


          



        </>
    )
}

export default Popup