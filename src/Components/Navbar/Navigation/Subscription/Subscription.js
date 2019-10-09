import React from 'react';
import styles from './Subscription.module.css'


const Subscription = () => {
  return (

          <div className={styles.subscription}>
              <div><h2>Подписка</h2></div>

              <div className={styles.unsubscribeButton}>Текущая карта: номер какрты через пропсы
                 <br/>
                  <button>Отменить подписку</button>
              </div>

              <div className={styles.payments}>Платежи
              <ul>
                  <li>Дата: тут будут пропсы</li>
                  <li>Подписка: тут будут пропсы с кол-во месяцев</li>
                  <li>Цена подписки: пропсы с ценой</li>
              </ul>
              </div>


          </div>



  );
};

export default Subscription ;
