import React, { useState } from 'react'
import {Form,FormGroup,Input,Label,Button, FormFeedback } from 'reactstrap'
import {FormValidate} from '../script'
import {PostUser} from '../../../service/RegisterUserService'
import {history} from '../../../helper/History'

const RegisterForm=()=>{
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:'',
    cpassword:''
  })

  const setField=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!FormValidate(form)){
      return false;
    }
    // post user there
    PostUser(form)   
    // clear form
    onClear()
    // redirect to login page
    history.push("/login")
  }

  const onClear=()=>{
    setForm({
      username:'',
      email:'',
      password:'',
      cpassword:''
    })
  }



    return (
        <Form onSubmit={onSubmit}>
        <FormGroup>
           <Label htmlFor="Username">Username</Label>
           <Input  type="text" name="username" id="Username" value={form.username} onChange={setField} autoComplete="on"/>
           <FormFeedback id = "username_msg"></FormFeedback>
         </FormGroup>
         <br></br>


         <FormGroup>
           <Label htmlFor="Email">Email</Label>
           <Input  type="email" name="email" id="Email" value={form.email} onChange={setField} autoComplete="on"/>
           <FormFeedback id = "email_msg"></FormFeedback>
         </FormGroup>
         <br></br>


         <FormGroup>
           <Label htmlFor="Password">Password</Label>
           <Input type="password" name="password" id="Password" value={form.password} onChange={setField} autoComplete="off" />
           <FormFeedback id = "pwd_msg"></FormFeedback>
         </FormGroup>
         <br></br>

         <FormGroup>
           <Label htmlFor="ConfirmPassword">Confirm Password</Label>
           <Input type="password" name="cpassword" id="ConfirmPassword" value={form.cpassword} onChange={setField}  autoComplete="off" />
           <FormFeedback id = "cpwd_msg"></FormFeedback>
         </FormGroup>
         <br></br>
         
         <Button type="submit" color="warning">Submit</Button>
         <Button type="reset" onClick={onClear} style={{marginLeft:"20px"}} color="warning" outline>Clear</Button>
         </Form>
    )
}
export default RegisterForm