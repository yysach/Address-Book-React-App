import React, { useEffect, useState } from 'react';
import { Services } from '../../../service/UserService';
import './showContacts.css'
import Entry from './Entry'

const ShowContacts=()=>{

    const [contacts,setContacts]=useState(null);
    useEffect(()=>{
        Services.showContacts().then(data=>{setContacts(data)})
    },[])


    return (
        <div className="height-100 bg-light">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">PhoneNo.</th>
                    <th scope="col">About</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map((contact)=> <Entry key={contact.phone} contact={contact} />)}
                    
                </tbody>
            </table>
            {!contacts && <span>There is no contact</span>}
        </div>
    )
}

export default ShowContacts