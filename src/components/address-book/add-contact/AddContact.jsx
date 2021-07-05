import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Services} from '../../../service/UserService';
import './addContact.css';

const AddContact=()=>{

    const [contact,setContact]=useState({
        name:"",
        email:"",
        phone:"",
        about:""
    });

    const AddContactDetail=(e)=>{
        e.preventDefault()
        console.log(contact)
        Services.addContact(contact).then(data=>{console.log(data)})
        onClear()
    }

    const onClear=()=>{
        setContact({
            name:"",
            email:"",
            phone:"",
            about:""
        })
    }

    const HandleContact=(e)=>{
        setContact({
            ...contact,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()

        })
    }

    return (

        <React.Fragment>
        <div className="height-100 bg-light">
        <Form onSubmit={AddContactDetail}>
            <FormGroup row>
                <Label for="exampleContactName">Name</Label>
                <Input type="text" name="name" id="exampleContactName" value={contact.name} onChange={HandleContact} required/>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleContactEmail">Email</Label>
                <Input type="email" name="email" id="exampleContactEmail" value={contact.email} onChange={HandleContact} required/>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleContactTel">Contact Number</Label>
                <Input type="tel" name="phone" id="exampleContactTel" placeholder="12**567**9" pattern="[0-9]{10}" value={contact.phone} onChange={HandleContact} required/>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleContactAbout">About</Label>
                <Input type="text" name="about" id="exampleContactAbout" value={contact.about} onChange={HandleContact} required/>
            </FormGroup>
            <FormGroup row>
            <Button color="primary" type="submit" outline block>Add</Button>
            </FormGroup>
      </Form>
        </div>
    </React.Fragment>
             
    
    )
}


export default AddContact