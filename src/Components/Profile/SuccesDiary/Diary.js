import React from 'react';
import styles from './Diary.module.css'
import Post from "./DiaryPost/Post";

const Diary = () => {
  return (
      <div className={styles.diary}>
          Here you can write your own success
          <div>
              <textarea placeholder="type something" id="post" cols="90" rows="10"></textarea>
          </div>
          <button type='submit' >Press here  </button>

          <Post/>
          <Post/>
          <Post/>
          <Post/>
      </div>



  );
};

export default Diary;
