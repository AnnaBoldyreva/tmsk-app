import React from 'react';
import styles from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./DialogMessages/Messages";


const Dialogs = (props) => {


    let dialogItems = props.dialogDate.map(el => <Dialog id={el.id} name={el.name}/>);
    let messageItem = props.messageData.map(el => <Messages id={el.id} message={el.message} />);
    return (

      <div>
      <div className={styles.dialogs}>

          <div> {dialogItems}</div>

          <div>{messageItem}</div>


      </div>
      </div>



  );
};

export default Dialogs;
