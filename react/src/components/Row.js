import React from 'react';
import Square from './Square';

const Row = props => {
  return (
    <div className="row">
      <Square rowIndex={props.rowIndex} indexInRow={0} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={1} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={2} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={3} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={4} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={5} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={6} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={7} puzzle={props.puzzle} />
      <Square rowIndex={props.rowIndex} indexInRow={8} puzzle={props.puzzle} />
    </div>
  )
}

export default Row;
