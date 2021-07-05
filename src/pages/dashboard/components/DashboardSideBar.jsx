import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {colorLink} from '../script'

const DashboardSideBar=({onLogOut})=>{

    useEffect(()=>{
        const linkColor = document.querySelectorAll('.nav_link')
        linkColor.forEach(l=> {
            l.addEventListener('click', colorLink)
        })
    },[])


    return (
        <React.Fragment>
            <div className="l-navbar" id="nav-bar">
                        <nav className="nav">
                            <div> <Link to="/user/index" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Reactstrap</span> </Link>
                                <div className="nav_list">
                                     <Link to="/user/index" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </Link> 
                                     <Link to="/user/profile" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Profile</span> </Link>
                                     <Link to="/user/add-contact" className="nav_link"> <i className='bx bx-book nav_icon'></i> <span className="nav_name">Add Contact</span> </Link>
                                     <Link to="/user/show-contacts" className="nav_link"> <i className='bx bx-message-add nav_icon'></i> <span className="nav_name">Show Contacts</span> </Link> 
 
 
                                </div>
                            </div> <Link to="#" className="nav_link"><i className='bx bx-log-out nav_icon' onClick={()=>onLogOut()}></i> <span className="nav_name">SignOut</span> </Link>
                        </nav>
            </div>
        </React.Fragment>
    )
}

export default DashboardSideBar