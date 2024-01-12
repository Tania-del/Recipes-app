import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoriesReducer from './categoriesSlice'
import recipesReducer from './recipesSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;


export default store;