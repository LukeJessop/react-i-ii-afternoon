import React, {Component} from 'react';
import './App.css';
import Main from './Components/Main'
import data from './data'
import Next from './Components/Next'
import Previous from './Components/Previous'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : data,
      dataId: data[{id}]
    }
    console.log(dataId)
  }
  render(){
    return (
      <div className="App">
        <Next/>
        <Main/>
        <Previous/>
      </div>
    );
  }
}

export default App;
