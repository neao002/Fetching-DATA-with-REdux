import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // create a redux store
// import { createStore } from "redux";

// // Reducer: is a function(state, action) and return a state
// const reducerName = (state, action)=>{
//   switch (action.type) {
//     case 'ADD_NUMBER':
//       state = state + action.payload // 5+ 95 = 100
//       break;
//     case 'REMOVE_NUMBER':
//       state = state - action.payload // 100-20 = 80
//       break;
//     case 'DEVIDE_NUMBER':
//       state = state/action.payload // 80/2 = 40
//       break;
//     case 'MULTIPLY_NUMBER':
//       state = state * action.payload // 80/2 = 40
//       break;      
//     default:
//       state = 5
//       break;
//   }
//   return state; 
// }

// // make a store for Library
// const store = createStore(reducerName, 5); // createStore(reducerName, initialValue)

// // call a action
// store.subscribe(()=>{
//   console.log('Updated data for store: ', store.getState());
// })

// // Action: is Object{type: value, payload/data: value}
// // Action 01
// store.dispatch({
//   type: "ADD_NUMBER", // type should be a string and capital
//   payload: 95 // data
// })
// // Action 02
// store.dispatch({
//   type: "REMOVE_NUMBER", // type should be a string and capital
//   payload: 20 // data
// })
// // Action 03
// store.dispatch({
//   type: "DEVIDE_NUMBER", // type should be a string and capital
//   payload: 2 // data
// })

// // Action 04
// store.dispatch({
//   type: "MULTIPLY_NUMBER", // type should be a string and capital
//   payload: 400 // data
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
