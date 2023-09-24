import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myreduxstore from './Components/Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myreduxstore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

