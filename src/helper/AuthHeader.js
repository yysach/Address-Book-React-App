import { AuthenticationService } from '../service/AuthenticationService';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = AuthenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return {
        Authorization : `Bearer ${currentUser.token}`,
        'Content-Type': 'application/json',
     };
    } else {
        return {};
    }
}