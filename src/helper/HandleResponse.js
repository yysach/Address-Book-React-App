import { AuthenticationService } from '../service/AuthenticationService';

export function HandleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if ([401,403,404,406,500].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden 406 not acceptable and 500 server error response returned from api
                AuthenticationService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}