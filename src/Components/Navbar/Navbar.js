import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
          <div><NavLink to='/profile'>Profile</NavLink></div>
          <div>Analytics</div>
          <div>Subscription</div>
          <div>Settings</div>
          <div>Help</div>
      </nav>

  );
};

export default Navbar;
