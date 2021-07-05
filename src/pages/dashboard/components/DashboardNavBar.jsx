import React, { useEffect } from 'react'
import {showNavbar} from '../script'

const DashboardNavBar=({onLogOut})=>{
    useEffect(()=>{
        showNavbar('header-toggle','nav-bar','body-pd','header')
    },[])    
    return (
        <React.Fragment>
            <header className="header" id="header">
                        <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
                        <div className="header_btn"> <button onClick={()=>onLogOut()} className="btn btn-danger">SignOut</button></div>
            </header>
        </React.Fragment>
    )
}

export default DashboardNavBar