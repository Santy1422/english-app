import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(

  <React.StrictMode>
        <Provider store = {store}>

    <GoogleOAuthProvider clientId="302924800145-ru90babs28qf17asr2l76oij0rdvdt2m.apps.googleusercontent.com">

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </GoogleOAuthProvider>
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
