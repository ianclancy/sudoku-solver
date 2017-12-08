import React, { Component } from 'react';
import Grid from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <Grid />
      </div>
    )
  }
}

export default App;
