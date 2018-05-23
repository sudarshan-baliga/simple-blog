var initialState = {'loggedin':'NO' }
export default function(state = initialState, action){
    console.log('state',state, action);
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {'loggedin':'YES','data':action.payload};
        case 'LOGIN_FAILURE':
            return {'loggedin':'NO'}
    }
    return state;
}