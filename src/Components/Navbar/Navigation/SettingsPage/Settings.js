import React from 'react';
import styles from './Settings.module.css'


const Settings = () => {
  return (

          <div className={styles.settings}>
              <div><h3>Настройка профиля</h3>
                  Имя:
                  <br/>
                  <input type="text" placeholder='Name'/>
                  <br/>
                  Фамилия:
                  <br/>
                  <input type="text" placeholder='Second name'/>
                  <br/>
                  Дата рождения:
                  <br/>
                  <input type="text" placeholder='date'/>
              </div>
              <div>Выберете страну из списка: тут должен быть список </div>
              <div>Настройки доступа</div>

          </div>



  );
};

export default Settings;
