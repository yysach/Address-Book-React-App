import {base_url} from '../api/Url'
import {HandleResponse} from '../helper/HandleResponse'
import {toast} from 'react-toastify'

export const PostUser=(data)=>{

    return fetch(`${base_url}/api/register`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),

    })
    .then(HandleResponse)
    .then((data) => {
        toast.success(data.message) 
    })
    .catch((error)=>{
        toast.error(error)
    })
}