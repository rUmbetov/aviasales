import React from 'react';

import logoCompany from '../../media/S7 Logo.svg';

import styles from './Ticket.module.scss';

const Ticket = () => {
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <h3 className={styles.title}>13 400 Р</h3>
        <img src={logoCompany} alt="logo company" />
      </div>
      <div className={styles.ticket__main}>
        <div className={styles['ticket__main-top']}>
          <div className={styles.departure}>
            <div className={styles.departure__title}>MOW – HKT</div>
            <div className={styles.departure__info}>10:45 – 08:00</div>
          </div>
          <div className={styles.departure}>
            <div className={styles.departure__title}>В пути</div>
            <div className={styles.departure__info}>21ч 15м</div>
          </div>
          <div className={styles.departure}>
            <div className={styles.departure__title}>2 пересадки</div>
            <div className={styles.departure__info}>HKG, JNB</div>
          </div>
        </div>
        <div className={styles['ticket__main-bottom']}>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>MOW – HKT</div>
            <div className={styles.arrival__info}>11:20 – 00:50</div>
          </div>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>В пути</div>
            <div className={styles.arrival__info}>13ч 30м</div>
          </div>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>1 пересадка</div>
            <div className={styles.arrival__info}>HKG</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
