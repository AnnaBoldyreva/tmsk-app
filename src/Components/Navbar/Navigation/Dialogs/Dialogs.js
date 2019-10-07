import React from 'react';
import styles from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./DialogMessages/Messages";


const Dialogs = () => {
    let dialogDate = [
        {id:1, name: 'Nate' },
        {id:2, name: 'Serena' },
        {id:3, name: 'Blair' },
        {id:4, name: 'Dan' },
        {id:5, name: 'Erick' }
    ];

    let dialogItems = dialogDate.map(el => <Dialog id={el.id} name={el.name}/>);
  return (

      <div>
      <div className={styles.dialogs}>

          <div> {dialogItems}</div>

          <div><Messages/></div>


      </div>
      </div>



  );
};

export default Dialogs;
