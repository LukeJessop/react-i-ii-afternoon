import React, {Component} from 'react';
import './App.css';
import Counter from './Components/Counter'
import data from './data'
import Next from './Components/Next'
import Previous from './Components/Previous'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : data,
      counterNum: 0,
      placeHolder: 1
    }
    this.increaseValue = this.increaseValue.bind(this)
    this.decreaseValue = this.decreaseValue.bind(this)
  }

  displayName(id){
    for( let i = 0; i < this.state.data.length; i++){
      if(i === id-1){
        return this.state.data[i].name.first + ' ' + this.state.data[i].name.last
      }
    }
  }
  
  displayLocation(id){
    for( let i = 0; i < this.state.data.length; i++){
      if(i === id-1){
        return this.state.data[i].city + ', ' + this.state.data[i].country
      }
    }
  }
  
  displayJobTitle(id){
    for( let i = 0; i < this.state.data.length; i++){
      if(i === id-1){
        return this.state.data[i].title
      }
    }
  }

  displayEmployer(id){
    for( let i = 0; i < this.state.data.length; i++){
      if(i === id-1){
        return this.state.data[i].employer
      }
    }
  }
  
  displayFavorites(id){
    for(let i = 0; i < this.state.data.length; i++){
      if(i === id-1){
        for(let j = 0; j < this.state.data[i].favoriteMovies.length; j++) {
          return (
            <ol>
              <li>{this.state.data[i].favoriteMovies[j]}</li>
              <li>{this.state.data[i].favoriteMovies[j+ 1]}</li>
              <li>{this.state.data[i].favoriteMovies[j+ 2]}</li>
            </ol>
          )
        }
      }
    }
  }



  count(id){
    return this.state.counterNum = id
  }

  increaseValue(){
    let int = this.state.placeHolder
    if(this.state.placeHolder === 25){
      return 
    }
    this.setState({placeHolder: int + 1})
  }

  decreaseValue(){
    let int = this.state.placeHolder
    if(this.state.placeHolder === 1){
      return 
    }
    this.setState({placeHolder: int - 1})
  }

  render(){

    return (
      <div className="App">
        <header>
          <h3 className='title'>
          Home
          </h3>
        </header>
        <div className="maindata">
          <Counter/>
          <h1 className="counter">{this.count(this.state.placeHolder)}/25</h1>
          <h1 className="name">{this.displayName(this.state.placeHolder)}</h1>
          <h3 className="info">From: {this.displayLocation(this.state.placeHolder)}</h3>
          <h3 className="info">Job Title: {this.displayJobTitle(this.state.placeHolder)}</h3>
          <h3 className="info">Employer: {this.displayEmployer(this.state.placeHolder)}</h3>
          <h1 className="favorites">
            Favorite Movies:
          </h1>
            <ol className="movielist">
            {this.displayFavorites(this.state.placeHolder)}
            </ol>
        </div>
        <div className="buttons">
        <Next className="buttons button1" increaseValue={this.increaseValue}/>
        <Previous className="buttons button2" decreaseValue={this.decreaseValue}/>
        </div>
      </div>
    );
  }
}

export default App;
