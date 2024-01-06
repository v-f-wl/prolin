import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
}

const initialState:InitialState =  {
  value: false
} 

export const TodoModal = createSlice({
  name: 'TodoModal',
  initialState,
  reducers: {
    changeToDoModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
})

export const { changeToDoModal } = TodoModal.actions

export default TodoModal.reducer