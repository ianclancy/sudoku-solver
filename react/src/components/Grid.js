import React from 'react';
import Row from './Row';

const Grid = props => {
  return (
    <div className="grid">
      <Row rowIndex={0} puzzle={props.puzzle} />
      <Row rowIndex={1} puzzle={props.puzzle} />
      <Row rowIndex={2} puzzle={props.puzzle} />
      <Row rowIndex={3} puzzle={props.puzzle} />
      <Row rowIndex={4} puzzle={props.puzzle} />
      <Row rowIndex={5} puzzle={props.puzzle} />
      <Row rowIndex={6} puzzle={props.puzzle} />
      <Row rowIndex={7} puzzle={props.puzzle} />
      <Row rowIndex={8} puzzle={props.puzzle} />
    </div>
  )
}

export default Grid;
