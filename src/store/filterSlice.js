import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  0: true,
  1: true,
  2: true,
  3: true,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { filterName } = action.payload;
      if (filterName === 'all') {
        const newState = !state.all;
        return {
          all: newState,
          0: newState,
          1: newState,
          2: newState,
          3: newState,
        };
      } else {
        state[filterName] = !state[filterName];
        state.all = state[0] && state[1] && state[2] && state[3];
      }
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
