import React, { Component } from 'react';
import Grid from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: []
    };
    this.handleNewPuzzleClick = this.handleNewPuzzleClick.bind(this);
  }

  handleNewPuzzleClick(event) {
    event.preventDefault();
    let sudoku = require('sudoku');
    let puzzle = sudoku.makepuzzle();
    this.setState({ puzzle: puzzle });
  }

  render() {
    return(
      <div>
        <Grid
          puzzle={this.state.puzzle}
        />
        <div className="buttons">
          <button type="button" onClick={this.handleNewPuzzleClick}>
            New Puzzle
          </button>
        </div>
      </div>
    )
  }
}

export default App;
