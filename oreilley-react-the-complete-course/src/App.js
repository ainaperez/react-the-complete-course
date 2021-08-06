import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const Styledbutton = styled.button`
  background-color: green; 
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`
;


class App extends Component{

  state = ({
    persons:[
      {id: 'vasdf1', name: 'Paul', age: 29}, 
      {id: 'vasdf2',name: 'Sara', age: 46}, 
      {id: 'vasdf3',name: 'Alex', age: 21}
    ] 
  });

/*switchNameHandler = (newName) => {
    //console.log('Was clicked'); 
    this.setState({persons:
      [
      {name: newName, age: 29}, 
      {name: 'Saray', age: 46}, 
      {name: 'Alexander', age: 21}
    ] 
  });
};*/

/*<Person 
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
          age={this.state.persons[2].age} /> */

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

deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons]; 
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

togglePersonsHandler = () =>{
  const doesShow =  this.state.showPersons; 
  this.setState({showPersons: !doesShow})
}

render() {

  

  let persons = null;

  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    changed = {(event) => this.nameChangedHandler(event, person.id)}
                   />
        })}
        
      </div>
    );
    /*style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }*/
  }

  let classes = [];

  if(this.state.persons.length <= 2) {
    classes.push('red');
  }
  if(this.state.persons.length <= 1) {
    classes.push('bold');
  }

return (
 
    <div className="App">
      <h1>Hi, I am react App</h1>
      <p className={classes.join(' ')}>Is this working?</p>
      <Styledbutton  onClick={this.togglePersonsHandler}>
        Show Names</Styledbutton>

        {persons}  

    </div>
    
  );
}
}




export default App ;
