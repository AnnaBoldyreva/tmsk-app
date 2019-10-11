import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Diary from "./SuccesDiary/Diary";

const Profile = (props) => {

    let profileElements = props.profileData.map(info => <ProfileInfo name={info.name} country={info.country} age={info.age}/> );
  return (
      <div className={styles.profile}>

          {profileElements}
          <Diary postData={props.postData} />

      </div>

  );
};

export default Profile;
