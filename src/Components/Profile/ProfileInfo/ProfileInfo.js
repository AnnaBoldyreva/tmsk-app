import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div className={styles.profileInfo}>
          <img  className={styles.img} src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Beyonce_-_Lemonade_%28album_cover%29.png/270px-Beyonce_-_Lemonade_%28album_cover%29.png" alt="avatar"/>
          <br/>Name: Anna
          <br/>Country: Russia
          <br/>Age: 21

      </div>

  );
};

export default ProfileInfo;
