import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Post from './components/Post';



export default 
         (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route  path='/product/:id' component={Post} />
            </Switch>
        )

 
