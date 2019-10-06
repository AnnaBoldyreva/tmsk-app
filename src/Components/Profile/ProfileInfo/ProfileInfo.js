import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <header>
      <div className={styles.profileInfo}>
          <div className={styles.img}>
          <img  src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Beyonce_-_Lemonade_%28album_cover%29.png/270px-Beyonce_-_Lemonade_%28album_cover%29.png" alt="avatar"/>
          </div>
          <div className={styles.info}>
          <br/>Name:{props.name}
          <br/>Country: {props.country}
          <br/>Age: {props.age}
          </div>

      </div>
      </header>

  );
};

export default ProfileInfo;
