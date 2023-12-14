// npm i redux @types/redux
import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
});
const store = createStore(reducer);

export type TRootState = ReturnType<typeof store.getState>

export default store;
