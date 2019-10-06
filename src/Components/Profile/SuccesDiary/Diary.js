import React from 'react';
import styles from './Diary.module.css'
import Post from "./DiaryPost/Post";

const Diary = (props) => {
    let postData= [
        {id:1, header:'My first week' , message:'It was hard.But I did it', likesCount: 321 },
        {id:2, header:'My second week' , message:'It was not so bad' , likesCount:489  },
        {id:3, header:'My third week' , message: 'I feel so good' , likesCount: 313 }
    ];

    let postsElement = postData.map(post =>  <Post header={post.header} message={post.message} likesCount={post.likesCount}/> );

  return (
      <div className={styles.diary}>
          Here you can write your own success
          <div>
              <textarea placeholder="type something" id="post" cols="90" rows="10"></textarea>
          </div>
          <button type='submit'>Press here</button>
          {postsElement}


      </div>


  );
};

export default Diary;
