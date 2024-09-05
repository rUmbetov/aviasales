import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://aviasales-test-api.kata.academy';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/search`);
    const data = await response.json();

    if (response.ok) {
      return data.searchId;
    } else {
      return rejectWithValue(data);
    }
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/tickets?searchId=${searchId}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    searchId: null,
    status: 'idle',
    error: null,
    stop: false,
    visibleTickets: 5,
  },
  reducers: {
    showMoreTickets(state) {
      state.visibleTickets += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tickets = [...state.tickets, ...action.payload.tickets];
        state.stop = action.payload.stop;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { showMoreTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
