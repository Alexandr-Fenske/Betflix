import { configureStore } from '@reduxjs/toolkit';

import currentQueryReducer from '../features/currentQuerySlice';

export const store = configureStore({
  reducer: {
    currentQuery: currentQueryReducer,
  },
});
