import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";

import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line
import firebase from "./firebase";

// import {WriteDB} from "./firebase/testFB";
// import firebaseConfig from "./firebase/config";
// console.log(firebaseConfig)

firebase.login('t1@t.ru','123456');

// WriteDB();



ReactDOM.render(
        <ErrorBoundry>
                <Router>
                    <App />
                </Router>
        </ErrorBoundry>
    , document.getElementById('root'));

