import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
      <nav className={styles.nav}>
          <div>Profile</div>
          <div>Analytics</div>
          <div>Subscription</div>
          <div>Settings</div>
          <div>Help</div>
      </nav>

  );
};

export default Navbar;
