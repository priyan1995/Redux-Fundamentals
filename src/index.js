import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer from './reducers/rootReducer'
import { thunk } from 'redux-thunk';
import combinedReducer from './reducers/rootReducer';


const store = createStore(combinedReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}> <App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
