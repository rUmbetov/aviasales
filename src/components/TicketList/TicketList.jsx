import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Spin, Alert, Button, FloatButton } from 'antd';

import Ticket from '../Ticket/Ticket';
import { fetchTickets, fetchSearchId, showMoreTickets } from '../../store/ticketSlice';
import { filterTickets, sortedTickets } from '../../utils/ticketUtils';

import styles from './TicketList.module.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const {
    tickets,
    status: ticketStatus,
    error,
    stop,
    searchId,
    visibleTickets,
  } = useSelector((state) => state.tickets);
  const sortType = useSelector((state) => state.sort.sortType);
  const filters = useSelector((state) => state.filter);

  useEffect(() => {
    if (!searchId) {
      dispatch(fetchSearchId());
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    if (searchId && !stop && ticketStatus !== 'loading') {
      dispatch(fetchTickets(searchId));
    }
  }, [dispatch, searchId, ticketStatus, stop, error]);

  const filteredTicket = filterTickets(tickets, filters);
  const sortedTicket = sortedTickets(filteredTicket, sortType);

  return (
    <div>
      {sortedTicket.length === 0 && stop && (
        <Alert className={styles.alert} message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" />
      )}
      <ul className={styles.ticket_list}>
        {!stop && (
          <div className={styles.spin}>
            <Spin size="large" />
            <div>Загрузка билетов</div>
          </div>
        )}
        {sortedTicket.slice(0, visibleTickets).map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))}
        {sortedTicket.length > 0 && visibleTickets < tickets.length && (
          <Button className={styles.btn} type="primary" onClick={() => dispatch(showMoreTickets())} block>
            Показать еще билеты
          </Button>
        )}
        <FloatButton.BackTop />
      </ul>
    </div>
  );
};

export default TicketList;
