import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LifeCycleComponent from '../components/LifeCycleComponent'
import Login from '../components/Login'
import usestateexplain from '../components/usestateexplain'
import Data from '../components/Data'
import Showdata from '../components/Showdata'
import signuppage from '../components/signuppage'

function Routess(){
    return (
        <Switch>
            <Route path='/data' component={Data}/>
            <Route path='/component' component={LifeCycleComponent}/>
            <Route path='/login' component={Login}/>
            <Route path='/usestate' component={usestateexplain}/> 
            <Route path='/showdata/:id' component={Showdata} />
            <Route path='/signup' component={signuppage} />
            

        </Switch>
       



    )
}

export default Routess