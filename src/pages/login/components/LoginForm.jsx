import React, { useEffect, useState } from 'react'
import {Form,FormGroup,Input,Label,Button,FormFeedback } from 'reactstrap'
import {FormValidate} from '../script'
import {AuthenticationService} from '../../../service/AuthenticationService'
import {Link} from 'react-router-dom'


const LoginForm=()=>{
  const [username, setUsername]=useState("")
  const [password,setPassword]=useState("")

  useEffect(()=>{
    clearForm();
  },[])

  const onSubmit=(e)=>{
    e.preventDefault();
    if(!FormValidate(username,password)){
      return false;
    }
    // post method
    AuthenticationService.login(username,password)
    clearForm()
  }

  const clearForm=()=>{
    setUsername("")
    setPassword("")
  }


    return (
      <React.Fragment>
        <Form onSubmit={onSubmit} method="post">
        <FormGroup>
           <Label htmlFor="Username">Username</Label>
           <Input  type="text" name="username" id="Username" value={username} onChange={(e)=>setUsername(e.target.value)} autoFocus autoComplete="off"/>
           <FormFeedback id = "username_msg"></FormFeedback>
         </FormGroup>
         <br></br>

         <FormGroup>
           <Label htmlFor="Password">Password</Label>
           <Input type="password" name="password" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off"/>
           <FormFeedback id = "pwd_msg"></FormFeedback>
         </FormGroup>
         <br></br>

         <Button type="submit" color='warning'>LogIn</Button>
         <Link to="/register"><Button type="button" style={{marginLeft:"20px"}} color="warning" outline>SignUp</Button></Link>
         </Form>
      </React.Fragment>
    )
}

export default LoginForm