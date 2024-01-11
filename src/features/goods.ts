import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (goods, action: PayloadAction<string>) => {
      goods.push(action.payload)
    },
    take: (goods, action: PayloadAction<string>) => {
      return goods.filter(goodsEntity => goodsEntity !== action.payload)
    },
    clear: () => [],
  }
})

export const { actions } = goodsSlice;

export default goodsSlice.reducer;
