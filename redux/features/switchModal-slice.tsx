import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  createModal: boolean;
}

const initialState:InitialState =  {
  createModal: false,
} 

export const switchModal = createSlice({
  name: 'switchModal',
  initialState,
  reducers: {
    switchCreateModal: (state, action: PayloadAction<boolean>) => {
      state.createModal = action.payload;
    }
  }
})

export const { switchCreateModal } = switchModal.actions

export default switchModal.reducer