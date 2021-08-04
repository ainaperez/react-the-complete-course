import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = ({
    persons:[
      {name: 'Paul', age: 29}, 
      {name: 'Sara', age: 46}, 
      {name: 'Alex', age: 21}
    ] 
  });

switchNameHandler = (newName) => {
    //console.log('Was clicked'); 
    this.setState({persons:
      [
      {name: newName, age: 29}, 
      {name: 'Saray', age: 46}, 
      {name: 'Alexander', age: 21}
    ] 
  });
};

nameChangedHandler = (event) => {
  this.setState({persons:
    [
    {name: 'Paul', age: 29}, 
    {name: event.target.value, age: 46}, 
    {name: 'Alexander', age: 21}
  ] 
});
};

render() {

  const style = {
    backgroundColor: 'white', 
    font: 'inherit', 
    border: '1px solid blue', 
    padding: '8px',
    cursor: 'pointer'
  }

return (
    <div className="App">
      <h1>Hi, I am react App</h1>
      <button style = {style}
      onClick={() => this.switchNameHandler('Paulson!!')}>
        Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this, 'Marland')}
      changed = {this.nameChangedHandler} >
      My Hobbies: cooking
      </Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
    </div>
  );
}
}




export default App;
