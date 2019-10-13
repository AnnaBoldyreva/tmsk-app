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
import Dialogs from "./Components/Navbar/Navigation/Dialogs/Dialogs";
import {addPost} from "./Redux/State";


const App = (props) => {

  return (
      <BrowserRouter>
    <div className='appWrapper'>

      <Header/>
      <Navbar/>
        <div className='content'>
            <Route path='/dialogs' render={() => <Dialogs messageData={props.state.messageData} dialogDate={props.state.dialogDate}/>}/>
            <Route path='/help' render={() => <Help/>}/>
            <Route path='/subscription' render={() => <Subscription/>}/>
            <Route path='/analytics' render={() => <Analytics/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/profile' render={() => <Profile profileData={props.state.profileData} postData={props.state.postData} addPost={addPost}/>}/>
            <Route path='/sport' render={() => <Sport/>}/>
            <Route path='/recipes' render={() => <Recipes/>}/>
            <Route path='/meditation' render={() => <Meditation/>}/>
            <Route path='/planner' render={() => <Planner/>}/>
        </div>


    </div>
      </BrowserRouter>
  );
};

export default App;
