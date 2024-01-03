import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoriesReducer from './categoriesSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;


export default store;