import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LifeCycleComponent from '../Component/LifeCycleComponent'
import DataComp from '../Component/DataComp'
import Main from '../Component/Main'
import Snippet from '../Component/Snippet'
import Blog from '../Component/Blog'
import Error404 from '../Component/Error404'

function Routess(){
    return (
        <Switch>
            <Route path='/snippet' component={Snippet}/>
            <Route path='/main/:name' component={Main}/>
            <Route path='/data' component={DataComp}/>
            <Route path='/lc' component={LifeCycleComponent}/>
            <Route path='/blog/:id' component={Blog}/>
            <Route path='/*' component={Error404}/>
        </Switch>
    )
}

export default Routess