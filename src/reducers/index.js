import { combineReducers } from 'redux';
 import loginReducer from "./loginReducer";
// import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
//    books:BooksReducer,
        login: loginReducer
});

export default rootReducer;
