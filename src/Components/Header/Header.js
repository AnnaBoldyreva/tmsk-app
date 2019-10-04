import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
      <header className={styles.header}>
          <div className={styles.headerItems}>Sport</div>
          <div className={styles.headerItems}>Recipes</div>
          <div className={styles.headerItems}>Meditation</div>


      </header>

  );
};

export default Header;
