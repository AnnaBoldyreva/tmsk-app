import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
          <div><NavLink to='/profile'>Profile</NavLink></div>
          <div><NavLink to='/analytics'>Analytics</NavLink></div>
          <div>Subscription</div>
          <div><NavLink to='/settings'>Settings</NavLink></div>
          <div>Help</div>
      </nav>

  );
};

export default Navbar;
