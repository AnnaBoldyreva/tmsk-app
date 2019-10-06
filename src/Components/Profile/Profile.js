import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Diary from "./SuccesDiary/Diary";

const Profile = () => {
    let profileData = [
        {id: 1, name: 'Anna', age: 21 , country: 'Russia'}
    ];

    let profileElements = profileData.map(info => <ProfileInfo name={info.name} country={info.country} age={info.age}/> );
  return (
      <div className={styles.profile}>

          {profileElements}
          <Diary />

      </div>

  );
};

export default Profile;
