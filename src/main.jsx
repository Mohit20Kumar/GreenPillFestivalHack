import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";


const provider = new AuthProvider(`${"xar_test_7c601ec3f2ffa38cc4322cb949fb1f306c08c3a8"}`)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProvideAuth provider={provider}>
            <App />
        </ProvideAuth>
    </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )
