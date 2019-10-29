import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import store from './Redux/State';
import {BrowserRouter} from "react-router-dom";





 let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             sendMessage={store.sendMessage.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};


rerender(store.getState());
store.subscribe(rerender());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

