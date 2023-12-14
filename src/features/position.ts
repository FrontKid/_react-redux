const MOVE_LEFT = 'position/MOVE_LEFT';
const MOVE_RIGHT = 'position/MOVE_RIGHT';
const MOVE_UP = 'position/MOVE_UP';
const MOVE_DOWN = 'position/MOVE_DOWN';


type TMoveUpAction = ({type: typeof MOVE_UP})
type TMoveLeftAction = ({type: typeof MOVE_LEFT})
type TMoveRightAction = ({type: typeof MOVE_RIGHT})
type TMoveDownAction = ({type: typeof MOVE_DOWN})


type TAction = TMoveUpAction 
| TMoveLeftAction 
| TMoveRightAction 
| TMoveDownAction;

const MoveUp = () => ({type: MOVE_UP});
const MoveLeft = () => ({type: MOVE_LEFT});
const MoveRight = () => ({type: MOVE_RIGHT});
const MoveDown = () => ({type: MOVE_DOWN});

interface TPosition {
  x: number;
  y: number;
}

const startPosition: TPosition = { x: 0, y: 0 };

const positionReducer = (
    position:TPosition = startPosition,
    action: TAction
  ): TPosition => {
  switch(action.type) {
    case MOVE_LEFT: {
      if (position.x === 0) {
        return position;
      }

      return {...position, x: position.x - 1 };
    }
    case MOVE_RIGHT: {
      if (position.x === 10) {
        return position
      }

      return {...position, x: position.x + 1 };
    }
    case MOVE_UP: {
      if (position.y === 0) {
        return position
      }

      return {...position, y: position.y - 1 };
    }
    case MOVE_DOWN: {
      if (position.y === 4) {
        return position
      }

      return {...position, y: position.y + 1 };
    }

    default: {
      return position;
    }
  }
};

export const action = { MoveUp, MoveLeft, MoveRight, MoveDown };


export default positionReducer;
