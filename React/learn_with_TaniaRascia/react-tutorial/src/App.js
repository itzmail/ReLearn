import React, {Component} from 'react';
import Table from './Table.js';

class App extends Component {
  render() {
    // const name = "Ismail";
    // with JSX
    // const heading = <h1 className="site-heading">Hello {name}</h1>

    // No JSX
    // const kepala = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')
    return(
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App;
