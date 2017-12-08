import React from 'react';

const Square = props => {
  let squareIndex = props.rowIndex * 9 + props.indexInRow
  let squareValue = ""
  if (props.puzzle[squareIndex]) {
    squareValue = props.puzzle[squareIndex]
  }
  return (
    <div className="square">
      {squareValue}
    </div>
  )
}

export default Square;
