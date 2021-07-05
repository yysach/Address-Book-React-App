import React from 'react'
import LoginForm from './components/LoginForm'
import styles from './Login.module.css'



const Login=()=>{
    return (
        <React.Fragment>
            <div  className={styles.container}>
                <h1>LogIn Here</h1>
            <br></br>
            <LoginForm/>
            </div>
        </React.Fragment>
    )
}

export default Login