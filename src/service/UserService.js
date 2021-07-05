import {base_url} from '../api/Url'
import {HandleResponse} from '../helper/HandleResponse'
import {toast} from 'react-toastify'
import {authHeader} from '../helper/AuthHeader'
export const Services={
    getDashboard,
    getProfile,
    addContact,
    showContacts
}


function getDashboard(){

    return fetch(`${base_url}/user/index`,{
        method:'GET',
        headers:authHeader(),
    })
    .then(HandleResponse)
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((error)=>{
        toast.error(error)
    })
}

function getProfile(){
    return fetch(`${base_url}/user/profile`,{
        method:'GET',
        headers: authHeader(),
    })
    .then(HandleResponse)
    .then((data) => {
        console.log(data)
        return data;
    })
    .catch((error)=>{
        toast.error(error)
    })
}

function addContact(contact){
    return fetch(`${base_url}/user/add-contact`,{
        method:'POST',
        headers: authHeader(),
        body: JSON.stringify(contact),
    })
    .then(HandleResponse)
    .then((data) => {
        console.log(data)
        return data;
    })
    .catch((error)=>{
        toast.error(error)
    })
}

function showContacts(){
    return fetch(`${base_url}/user/show-contacts`,{
        method:'GET',
        headers: authHeader(),
    })
    .then(HandleResponse)
    .then((data) => {
        console.log(data)
        return data;
    })
    .catch((error)=>{
        toast.error(error)
    })
}