import { useAppSelector, useAppDispatch } from "../app/hooks";
import * as positionAction from "../features/position";

export const Position = () => {
  const { x, y } = useAppSelector(state => state.position);
  const dispatch = useAppDispatch();

  const moveLeft = () => dispatch(positionAction.MoveLeft());
  const moveRight = () => dispatch(positionAction.MoveRight());
  const moveUp = () => dispatch(positionAction.MoveUp());
  const moveDown = () => dispatch(positionAction.MoveDown());

  const dance = () => dispatch(positionAction.doACircle(500))

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div onClick={dance} className="track" style={{ transform: transformValue }}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
