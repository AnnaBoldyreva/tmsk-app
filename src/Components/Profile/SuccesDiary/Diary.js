import React from 'react';
import styles from './Diary.module.css'
import Post from "./DiaryPost/Post";

const Diary = (props) => {

    let postsElement = props.postData.map(post =>  <Post header={post.header} message={post.message} likesCount={post.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let newText = newPostElement.current.value;
        alert(newText)
    };

  return (
      <div className={styles.diary}>
          Here you can write your own success
          <div>
              <textarea ref={newPostElement} placeholder="type something" id="post" cols="90" rows="10">

              </textarea>
          </div>
          <button onClick={addPost} type='submit'>Press here</button>
          {postsElement}


      </div>


  );
};

export default Diary;
