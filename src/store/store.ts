
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './todoModalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

// Определение типов RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
