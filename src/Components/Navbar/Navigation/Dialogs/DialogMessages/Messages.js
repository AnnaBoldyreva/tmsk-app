import React from 'react';
import styles from './messages.module.css'



const Messages = (props) => {
  return (

          <div className={styles.messages}>
              <div>{props.message}</div>



          </div>



  );
};

export default Messages;
