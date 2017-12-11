import React from 'react';

const Square = props => {
  let squareIndex = props.rowIndex * 9 + props.indexInRow
  let squareValue = ""
  if (!!props.puzzle[squareIndex] || props.puzzle[squareIndex] == 0) {
    return (
      <div className="square">
        {props.puzzle[squareIndex] + 1}
      </div>
    )
  } else {
    return (
      <input type="text" className="number-input" maxLength="1"/>
    )
  }
}

export default Square;
