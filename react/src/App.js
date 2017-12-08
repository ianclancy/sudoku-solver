import React, { Component } from 'react';
import Grid from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: []
    };
  }

  componentDidMount() {
    var sudoku = require('sudoku');
    var puzzle = sudoku.makepuzzle();
    var solution   = sudoku.solvepuzzle(puzzle);
    this.setState({ puzzle: puzzle })
  }


  render() {
    console.log(this.state.puzzle)
    return(
      <div>
        <Grid
          puzzle={this.state.puzzle}
        />
      </div>
    )
  }
}

export default App;
