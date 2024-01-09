import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface DateType{
  [key: string]: string
}

interface TastType{
  todoText: string,
  todoPriority: string,
  todoCategory: string,
  _id: string,
  createdAt: DateType
}

type InitialState = {
  store: TastType[];
  category: string[]
}

const initialState:InitialState =  {
  store: [],
  category:[],
} 

export const TodoTasks = createSlice({
  name: 'TodoModal',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TastType[]>) => {

      // Обновление store
      state.store = action.payload;

      // Обновление category
      const uniqueCategories = new Set<string>();
      action.payload.forEach((task) => {
        uniqueCategories.add(task.todoCategory);
      });
      state.category = Array.from(uniqueCategories);
    }
  }
})

export const { setTasks } = TodoTasks.actions

export default TodoTasks.reducer