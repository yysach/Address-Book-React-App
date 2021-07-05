import React from 'react';


const Entry=({contact})=>{
    return (
        <tr>
            <th scope="row">1</th>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.about}</td>
                    <td><i className="bx bx-trash" onClick={()=>console.log("hello delete")}></i></td>
        </tr>
    )
}

export default Entry