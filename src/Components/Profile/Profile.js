import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Diary from "./SuccesDiary/Diary";

const Profile = () => {
  return (
      <div className={styles.content}>
          <ProfileInfo/>
          <Diary/>
          Content
      </div>

  );
};

export default Profile;
