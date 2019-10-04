import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='appWrapper'>
      <header className='header'>

        <div className='headerItem'>Sport</div>
        <div className='headerItem'>Recipes</div>
        <div className='headerItem'>Meditation</div>

      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Analytics</div>
        <div>Subscription</div>
        <div>Settings</div>
        <div>Help</div>
      </nav>

      <div className='content'>
        Content
      </div>
      
    </div>
  );
}

export default App;
