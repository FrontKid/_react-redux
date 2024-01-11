import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MoveRight } from './position';

const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    add: (value, action: PayloadAction<number>) => value += action.payload,
    take: (value, action: PayloadAction<number>) => value -= action.payload,
    clear: () => 0,
  },
  extraReducers: (builder) => {
    builder.addCase(MoveRight.type, (value) => value + 1)
  }
}) 

export const { actions } = amountSlice;
export default amountSlice.reducer;
