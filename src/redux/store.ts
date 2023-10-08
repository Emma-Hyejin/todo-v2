import { configureStore } from '@reduxjs/toolkit';
import clearReducer from './clearSlice';

export const store = configureStore({
  reducer: {
    complete: clearReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
