import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import  Context  from './Components/utils/global.context';


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Context>
    <App />
    </Context>
    
    </BrowserRouter>
 
);


