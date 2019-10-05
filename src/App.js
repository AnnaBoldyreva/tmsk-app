import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Sport from "./Components/Header/Links/Sport/Sport";
import Recipes from "./Components/Header/Links/Recipes/Recipes";


const App = () => {

  return (
      <BrowserRouter>
    <div className='appWrapper'>

      <Header/>
      <Navbar/>
      <div className='content'>
       <Route path='/profile' component={Profile} />
       <Route path='/sport' component={Sport}/>
       <Route path='/recipes' component={Recipes}/>
      </div>


    </div>
      </BrowserRouter>
  );
};

export default App;
