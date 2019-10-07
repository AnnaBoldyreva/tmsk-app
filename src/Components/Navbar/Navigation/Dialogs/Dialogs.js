import React from 'react';
import styles from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./DialogMessages/Messages";


const Dialogs = () => {
  return (

      <div>
      <div className={styles.dialogs}>

          <div> <Dialog/></div>

          <div><Messages/></div>


      </div>
      </div>



  );
};

export default Dialogs;
