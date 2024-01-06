import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
}

const initialState:InitialState =  {
  value: false
} 

export const RatingModal = createSlice({
  name: 'RatingModal',
  initialState,
  reducers: {
    changeRatingModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
})

export const { changeRatingModal } = RatingModal.actions

export default RatingModal.reducer