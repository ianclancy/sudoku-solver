import React, { Component } from 'react';
import Grid from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: []
    };
    this.handleNewPuzzleClick = this.handleNewPuzzleClick.bind(this);
    this.handleSolvePuzzleClick = this.handleSolvePuzzleClick.bind(this);
  }

  handleNewPuzzleClick(event) {
    event.preventDefault();
    let sudoku = require('sudoku');
    let puzzle = sudoku.makepuzzle();
    this.setState({ puzzle: puzzle });
  }

  handleSolvePuzzleClick(event) {
    event.preventDefault();
    let sudoku = require('sudoku');
    let solution = sudoku.solvepuzzle(this.state.puzzle);
    this.setState({ puzzle: solution });
  }

  render() {
    return(
      <div>
        <Grid
          puzzle={this.state.puzzle}
        />
        <div className="buttons-container">
          <button type="button" onClick={this.handleNewPuzzleClick}>
            New Puzzle
          </button>
          <button type="button" onClick={this.handleSolvePuzzleClick}>
            Solve Puzzle
          </button>
        </div>
      </div>
    )
  }
}

export default App;
