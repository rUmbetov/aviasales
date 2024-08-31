import Ticket from '../Ticket/Ticket';

import styles from './TicketList.module.scss';

const TicketList = () => {
  return (
    <ul className={styles.ticket_list}>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
    </ul>
  );
};

export default TicketList;
