import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
      <header className={styles.header}>
          <div className={styles.headerItem}>
          <div className={styles.logo}>
              place for logo

          </div>
          <div className={styles.headerLinks}>
          <div>Sport</div>
          <div>Recipes</div>
          <div>Meditation</div>
          </div>
          </div>



      </header>

  );
};

export default Header;
