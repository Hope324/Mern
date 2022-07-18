import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Product from '../components/Product'
import Homescreen from '../components/Homescreen'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Adminlist from '../Admin/Adminlist'
import InsertCategory from '../Admin/InsertCategory'
import Cart from '../components/Cart'
import Modal from '../components/Modal'
import Insertproduct from '../Admin/Insertproduct'
function Routess() {
    return (
        <Routes>
            <Route path='/' element={<Homescreen />} />
            <Route path='/product/:name' element={<Product />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<Registration />} />
            <Route path='/Adminlist' element={<Adminlist/>} />
            <Route path='/InsertCategory' element={<InsertCategory/>} />
            <Route path='/Insertproduct' element={<Insertproduct/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/modal/:id' element={<Modal/>} />

        </Routes>




    )
}

export default Routess