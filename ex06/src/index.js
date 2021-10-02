import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render () {
      
    // Only change code below this line

    const world = "World";



// Only change code above this line



      return (
          <div className="App">
          <h1>Hello, world</h1>
          </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById(`root`));