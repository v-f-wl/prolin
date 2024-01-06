import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
}

const initialState:InitialState =  {
  value: true
} 

export const Loading = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    isLoaded: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
})

export const { isLoaded } = Loading.actions

export default Loading.reducer