import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import ToDoModal from './features/ToDoModal'
import Loading from './features/LoadStatus'
import RatingModal from "./features/RatingModal";
import TodoTasks from "./features/ToDoHandler";

export const store = configureStore({
  reducer: {
    RatingModal,
    ToDoModal, 
    TodoTasks,
    Loading
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector