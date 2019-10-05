import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
      <header className={styles.header}>
          <div className={styles.headerItem}>
              <div className={styles.logo}>
                  place for logo

              </div>
              <div className={styles.headerLinks}>
                  <div><NavLink to='/sport'>Sport</NavLink></div>
                  <div><NavLink to='/recipes'>Recipes</NavLink></div>
                  <div><NavLink to='/meditation'>Meditation</NavLink></div>
                  <div><NavLink to='/planner'>Planner</NavLink></div>
              </div>
          </div>


      </header>

  );
};

export default Header;
