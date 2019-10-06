import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Sport from "./Components/Header/Links/Sport/Sport";
import Recipes from "./Components/Header/Links/Recipes/Recipes";
import Meditation from "./Components/Header/Links/Mediatation/Meditation";
import Planner from "./Components/Header/Links/ToDoList/Planner";
import Settings from "./Components/Navbar/Navigation/SettingsPage/Settings";
import Analytics from "./Components/Navbar/Navigation/Analytics/Analytics";
import Subscription from "./Components/Navbar/Navigation/Subscription/Subscription";
import Help from "./Components/Navbar/Navigation/HelpPage/Help";


const App = () => {

  return (
      <BrowserRouter>
    <div className='appWrapper'>

      <Header/>
      <Navbar/>
        <div className='content'>
            <Route path='/help' component={Help}/>
            <Route path='/subscription' component={Subscription}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/sport' component={Sport}/>
            <Route path='/recipes' component={Recipes}/>
            <Route path='/meditation' component={Meditation}/>
            <Route path='/planner' component={Planner}/>
        </div>


    </div>
      </BrowserRouter>
  );
};

export default App;
