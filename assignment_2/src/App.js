import React, {Component} from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {

state = ({
  inputText: ''
})

changeInputHandler = (event) => {
  this.setState({
    inputText: event.target.value
  })
  

};

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value;

  const persons = [...this.state.persons]; 
  persons[personIndex] = person;

  this.setState({persons: persons});
};

render(){

  let letters = this.state.inputText.split('').map(letter =>{
    return(
      <CharComponent 
      letter = {letter}/>
    )
  });

  
  return(
    <div className="App">
      <input 
        type='text' 
        onChange = {this.changeInputHandler}></input>
        <p>{this.state.inputText}</p>

        <ValidationComponent textLength = {this.state.inputText} />

        {letters}

    </div>
  );
}
}

export default App;
