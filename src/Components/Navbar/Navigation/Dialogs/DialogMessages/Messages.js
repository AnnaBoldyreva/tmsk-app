import React from 'react';
import styles from './messages.module.css'



const Messages = (props) => {

    let messageElement = React.createRef();
    let sendMessage = ()=>{
        let newText = messageElement.current.value;
        alert(newText)
    };

  return (

          <div className={styles.messages}>
              <div>{props.message}
              <br/>
              <textarea ref={messageElement}>
              </textarea>
                  <button onClick={sendMessage}>send</button>

              </div>



          </div>



  );
};

export default Messages;
