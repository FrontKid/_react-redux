import { useDispatch } from 'react-redux';
import { action as amountAction } from '../features/amount';
import { useAppSelector } from '../app/hooks';

export const Amount = () => {
  const amount = useAppSelector((state) => state.amount);
  const dispatch = useDispatch();

  const take = (value: number) => dispatch(amountAction.take(value));
  const add = (value: number) => dispatch(amountAction.add(value));
  const clear = () => dispatch(amountAction.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
