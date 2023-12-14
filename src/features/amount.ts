const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type TAddAction = { type: typeof ADD; payload: number };
type TTakeAction = { type: typeof TAKE; payload: number };
type TClearAction = { type: typeof CLEAR }

const add = (value: number): TAddAction => ({ type: ADD, payload: value });
const take = (value: number): TTakeAction => ({ type: TAKE, payload: value });
const clear = (): TClearAction => ({ type: CLEAR });

type TAction = TAddAction | TTakeAction | TClearAction

const amountReducer = (amount = 0, action: TAction) => {
  switch(action.type) {
    case 'amount/ADD': {
      return amount + action.payload;
    }
    
    case 'amount/TAKE': {
      if (action.payload > amount) {
        return amount
      }

      return amount - action.payload;
    }

    case 'amount/CLEAR': {
      return 0
    }

    default: {
      return amount;
    }
  }
};

export const action = { add, take, clear };
export default amountReducer;
