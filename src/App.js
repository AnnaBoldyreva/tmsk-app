import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
    <div className='appWrapper'>

      <Header/>
      <Navbar/>
      <div className='content'>
       <Route path='/profile' component={Profile} />
      </div>


    </div>
      </BrowserRouter>
  );
};

export default App;
