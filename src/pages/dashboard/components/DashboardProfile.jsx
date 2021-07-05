import React,{useEffect, useState} from 'react'
import {Services} from '../../../service/UserService'

const DashboardProfile=({user})=>{
    const [profile,setProfile]=useState(null)
    useEffect(()=>{
        Services.getProfile().then(data=>{setProfile(data.message)})
    },[])
    return (
        <React.Fragment>
            <div className="height-100 bg-light">
                <h2>Profile{user.profile}</h2>
                {profile}
            </div>
        </React.Fragment>

    )
}

export default DashboardProfile