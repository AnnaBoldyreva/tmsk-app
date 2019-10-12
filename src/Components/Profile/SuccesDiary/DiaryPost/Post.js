import React from 'react';
import styles from './Post.module.css'
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
      <div className={styles.post}>
         <h3>{props.header}</h3>
          <div>{props.message}</div>
          <div>Likes: {props.likesCount}</div>
      </div>

  );
};

export default Post;
Post.propTypes = {
    likesCount: PropTypes.string
};