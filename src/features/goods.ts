const ADD = 'goods/ADD';
const TAKE = 'goods/TAKE';
const CLEAR = 'goods/CLEAR';

type TAddAction = { type: typeof ADD; payload: string };
type TTakeAction = { type: typeof TAKE; payload: string };
type TClearAction = { type: typeof CLEAR }

const add = (goodsEntity: string): TAddAction => ({ type: ADD, payload: goodsEntity });
const take = (goodsEntity: string): TTakeAction => ({ type: TAKE, payload: goodsEntity });
const clear = (): TClearAction => ({ type: CLEAR });

type TAction = TAddAction | TTakeAction | TClearAction

const goodsReducer = (goods: string[] = [], action: TAction) => {
  switch(action.type) {
    case 'goods/ADD': {
      return [...goods, action.payload];
    }

    case 'goods/TAKE': {
      return goods.filter(goodsEntity => goodsEntity !== action.payload);
    }

    case 'goods/CLEAR': {
      return [];
    }

    default: {
      return goods;
    }
  }
};

export const action = {add, take, clear};

export default goodsReducer;
