import React, { useEffect, useState} from 'react'
import {Services} from '../../../service/UserService'
const MainContent=({user})=>{

    const [dash,setDash]=useState(null)
    useEffect(()=>{
        Services.getDashboard().then(data=>{setDash(data.message)})
    },[])
    return (
        <React.Fragment>
              <div className="height-100 bg-light">
                        <h2>Hi {user.username}</h2>
                        {dash}

              </div>
        </React.Fragment>
    )
}

export default MainContent