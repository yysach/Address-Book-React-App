import React from 'react'
import RegisterForm from './components/RegisterForm'
import styles from './Register.module.css'

const Register=()=>{
    return (
        <div className={styles.container}>
            <h1>Register Here</h1>
            <br></br>
            <RegisterForm/>
        </div>
    )
}
export default Register