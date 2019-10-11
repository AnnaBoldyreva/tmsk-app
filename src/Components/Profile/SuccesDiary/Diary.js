import React from 'react';
import styles from './Diary.module.css'
import Post from "./DiaryPost/Post";

const Diary = (props) => {

    let postsElement = props.postData.map(post =>  <Post header={post.header} message={post.message} likesCount={post.likesCount}/> );

  return (
      <div className={styles.diary}>
          Here you can write your own success
          <div>
              <textarea placeholder="type something" id="post" cols="90" rows="10">

              </textarea>
          </div>
          <button type='submit'>Press here</button>
          {postsElement}


      </div>


  );
};

export default Diary;
