import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className='appWrapper'>

      <Header/>
      <Navbar/>
      <div className='content'>
        <Profile/>
      </div>


    </div>
  );
};

export default App;
