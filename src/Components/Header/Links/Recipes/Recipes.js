import React from 'react';
import styles from './Recipes.module.css'

const Recipes = () => {
  return (
      <div className={styles.recipes}>
          Recipes page
          <div>Завтрак</div>
          <div>Обед</div>
          <div>Ужин</div>
          <div>Перекусы</div>
          <div>Смузи</div>
      </div>

  );
};

export default Recipes;
