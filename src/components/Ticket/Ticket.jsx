import React from 'react';

import { formatTime, calculateEndTime, convertTime } from '../../utils/timeUtils';
import { transferStops } from '../../utils/ticketUtils';

import styles from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const {
    origin: depatureOrigin,
    destination: depatureDestination,
    date: depatureDate,
    duration: departureDuration,
    stops: departureStops,
  } = ticket.segments[0];
  const {
    origin: arrivalOrigin,
    destination: arrivalDestination,
    date: arrivalDate,
    duration: arrivalDuration,
    stops: arrivalStops,
  } = ticket.segments[1];

  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <h3 className={styles.title}>{ticket.price} Р</h3>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo company" />
      </div>
      <div className={styles.ticket__main}>
        <div className={styles['ticket__main-top']}>
          <div className={styles.departure}>
            <div className={styles.departure__title}>
              {depatureOrigin} – {depatureDestination}
            </div>
            <div className={styles.departure__info}>
              {formatTime(depatureDate)} – {calculateEndTime(depatureDate, departureDuration)}
            </div>
          </div>
          <div className={styles.departure}>
            <div className={styles.departure__title}>В пути</div>
            <div className={styles.departure__info}>{convertTime(departureDuration)}</div>
          </div>
          <div className={styles.departure}>
            <div className={styles.departure__title}>{departureStops.length} пересадки</div>
            <div className={styles.departure__info}>{departureStops.length ? transferStops(departureStops) : ''}</div>
          </div>
        </div>
        <div className={styles['ticket__main-bottom']}>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>
              {arrivalOrigin} – {arrivalDestination}
            </div>
            <div className={styles.arrival__info}>
              {formatTime(arrivalDate)} – {calculateEndTime(arrivalDate, arrivalDuration)}
            </div>
          </div>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>В пути</div>
            <div className={styles.arrival__info}>{convertTime(arrivalDuration)}</div>
          </div>
          <div className={styles.arrival}>
            <div className={styles.arrival__title}>{arrivalStops.length} пересадки</div>
            <div className={styles.arrival__info}>{arrivalStops.length ? transferStops(arrivalStops) : ''}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
