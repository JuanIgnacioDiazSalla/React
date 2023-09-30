import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlcE9dJCKx6H6gKuorvg3-9aZILYvEQEo",
  authDomain: "proyecto-react-coderhous-f28bc.firebaseapp.com",
  databaseURL: "https://proyecto-react-coderhous-f28bc-default-rtdb.firebaseio.com",
  projectId: "proyecto-react-coderhous-f28bc",
  storageBucket: "proyecto-react-coderhous-f28bc.appspot.com",
  messagingSenderId: "93994306073",
  appId: "1:93994306073:web:3f4f549f258208b0627888",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
