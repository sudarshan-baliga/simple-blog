var initialState = {'loggedin':'NO' }
export default function(state = initialState, action){
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {'loggedin':'YES','data':action.payload.data};
        case 'LOGIN_FAILURE':
            return {'loggedin':'NO'}
        default:
            return state;
    }
}