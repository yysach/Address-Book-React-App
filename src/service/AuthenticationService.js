import { BehaviorSubject } from 'rxjs';
import { HandleResponse } from '../helper/HandleResponse';
import {base_url} from '../api/Url'
import {toast} from 'react-toastify'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () {
        return currentUserSubject.value 
    }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${base_url}/api/login`, requestOptions)
        .then(HandleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            toast.success("You logged in..");
            return user;
        })
        .catch((error)=>{
                toast.error(error);
        })
        
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}