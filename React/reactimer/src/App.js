import React from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }

  addInterval() {
    setInterval(() => {
     this.increase() 
    }, 1000);
  }

  componentDidMount() {
    this.addInterval();
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return(
      <div>{this.state.time} Detik</div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start={0} />
        </header>
      </div>
    )
  }
}

export default App;
