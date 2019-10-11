import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let profileData = [
    {id: 1, name: 'Anna', age: 21 , country: 'Russia'}
];

let postData= [
    {id:1, header:'My first week' , message:'It was hard.But I did it', likesCount: 321 },
    {id:2, header:'My second week' , message:'It was not so bad' , likesCount:489  },
    {id:3, header:'My third week' , message: 'I feel so good' , likesCount: 313 }
];

ReactDOM.render(<App profileData={profileData} postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
