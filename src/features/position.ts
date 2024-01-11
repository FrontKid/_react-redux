import { Dispatch, createSlice } from '@reduxjs/toolkit';


interface TPosition {
  x: number;
  y: number;
}

const startPosition: TPosition = { x: 0, y: 0 };
const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    MoveUp: position => {
      position.y -= 1;
    },
    MoveLeft: position => {
      position.x -= 1
    },
    MoveRight: position => {
      position.x += 1
    },
    MoveDown: position => {
      position.y += 1
    },
  },
})

export const { MoveRight, MoveDown, MoveLeft, MoveUp} = positionSlice.actions;

export default positionSlice.reducer;

const wait = (delay: number): Promise<number> => {
  return new Promise(resolve => setTimeout(resolve, delay))
} 

export const doACircle = (delay: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(MoveRight())
    clearTimeout(await wait(delay))
    dispatch(MoveDown())
    clearTimeout(await wait(delay))
    dispatch(MoveLeft())
    clearTimeout(await wait(delay))
    dispatch(MoveUp())
  }
}