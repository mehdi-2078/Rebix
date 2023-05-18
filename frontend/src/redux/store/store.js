import {combineReducers, configureStore} from '@reduxjs/toolkit';


import sliceRegister from '../reducers/auth/registerSlice';
import sliceLogin from '../reducers/auth/loginSlice';
import sliceTodos from '../reducers/todos/todoSlice';


const reducer = combineReducers({
    login: sliceLogin,
    register: sliceRegister,
    todos: sliceTodos,


});


export const store = configureStore({reducer});


// subscribe
store.subscribe(() => console.log(store.getState()));
