import React from 'react';
import styles from './dialog.module.css'



const Dialog = (props) => {
  return (

      <div className={styles.dialog}>
          <div>{props.name}</div>


      </div>



  );
};

export default Dialog;
