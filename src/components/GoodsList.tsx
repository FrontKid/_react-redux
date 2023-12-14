import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { action as goodsAction } from '../features/goods';
import { useAppSelector } from '../app/hooks';

export const GoodsList = () => {
  const [newGoodsEntity, setNewGoodsEntity] = useState('');
  const goods = useAppSelector(state => state.goods)
  const dispatch = useDispatch();

  const addGood = (goodsEntity: string) => dispatch(goodsAction.add(goodsEntity))
  const removeGood = (goodsEntity: string) => dispatch(goodsAction.take(goodsEntity))

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGoodsEntity) {
      return;
    }

    addGood(newGoodsEntity);
    setNewGoodsEntity('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGoodsEntity}
          onChange={e => setNewGoodsEntity(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
