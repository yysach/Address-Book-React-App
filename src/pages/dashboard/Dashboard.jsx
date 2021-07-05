import React from 'react'
import {AuthenticationService} from '../../service/AuthenticationService'
import './style.css'
import DashboardSideBar from './components/DashboardSideBar'
import DashboardNavBar from './components/DashboardNavBar'
import {history} from '../../helper/History'

const Dashboard=({content:Content})=>{

    const user = AuthenticationService.currentUserValue
    const logout=()=>{
        AuthenticationService.logout();
        history.push('/login');
    }
    return (
        <React.Fragment>
            <div id="body-pd">      
                <DashboardNavBar onLogOut={logout}/>
                <DashboardSideBar onLogOut={logout}/>
                <Content user={user}/>
            </div>
        </React.Fragment>
    )
}

export default Dashboard