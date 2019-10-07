import React from 'react';
import styles from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./DialogMessages/Messages";


const Dialogs = () => {
  return (

          <div className={styles.dialogs}>
              Dialogs Page
              <Dialog/>
              <Messages/>

          </div>



  );
};

export default Dialogs;
