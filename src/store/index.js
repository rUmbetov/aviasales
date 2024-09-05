import { configureStore } from '@reduxjs/toolkit';

import ticketsReducer from './ticketSlice';
import sortReducer from './sortSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
});

export default store;
