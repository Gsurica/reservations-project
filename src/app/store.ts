import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationSlice';
import costumerReducer from '../features/costumerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    costumer: costumerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;