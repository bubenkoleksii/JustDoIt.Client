import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {setupStore} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = setupStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
