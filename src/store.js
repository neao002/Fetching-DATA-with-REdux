// made a store shelf for BookStore
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const initialState = {}

//  a middleware to solve error
const middleware = [thunk]
/**
 * parameter: reducer, initial value
 */
const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(...middleware)
);

export default store;

