import React from 'react';
import styles from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {
  return (

          <div className={styles.dialogs}>
              Dialogs Page
              <Dialog/>

          </div>



  );
};

export default Dialogs;
