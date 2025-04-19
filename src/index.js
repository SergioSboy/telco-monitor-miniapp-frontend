import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import initializeTelegramSDK from "./telegramMock";
import AuthProvider from "./provider/AuthProvider";
import {worker} from "./mocks/browser";

if (process.env.NODE_ENV === 'development') {
    await worker.start({
        onUnhandledRequest: 'warn'
    });
}

initializeTelegramSDK();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
);
