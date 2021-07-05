import React, { useEffect, useState } from 'react'
import {Router} from 'react-router-dom'

import { history } from './helper/History';
import { AuthenticationService } from './service/AuthenticationService';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './pages/Navigation'


function App() {

  const [currentUser,setCurrentUser]=useState(null)

  useEffect(()=>{
    AuthenticationService.currentUser.subscribe(x=>setCurrentUser(x))
  },[])

  


  return (
            <Router history={history}>
                <div>
                    <ToastContainer/>
                    {
                      currentUser && history.push("/user/index")
                    }
                    <Navigation/>
                </div>
            </Router>
  );
}

export default App;
