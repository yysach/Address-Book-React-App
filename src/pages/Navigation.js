import React from 'react'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Regiser from '../pages/register/Register'
import {Switch, Route} from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'
import Dashboard from './dashboard/Dashboard'
import DashboardProfile from './dashboard/components/DashboardProfile'
import MainContent from './dashboard/components/DashboardContent'
import AddContact from '../components/address-book/add-contact/AddContact'
import ShowContacts from '../components/address-book/show-contacts/ShowContacts'

const Navigation=()=>{
    return (
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Regiser/>
                </Route>
                <PrivateRoute exact path="/user/index" component={Dashboard} content={MainContent}/>
                <PrivateRoute exact path="/user/profile" component={Dashboard} content={DashboardProfile}/> 
                <PrivateRoute exact path="/user/add-contact" component={Dashboard} content={AddContact}/>
                <PrivateRoute exact path="/user/show-contacts" component={Dashboard} content={ShowContacts}/> 
 

 
          </Switch>
    )
}

export default Navigation