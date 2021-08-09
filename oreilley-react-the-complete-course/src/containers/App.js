import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../components/hoc/WithClass'

class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = ({
    persons:[
      {id: 'vasdf1', name: 'Paul', age: 29}, 
      {id: 'vasdf2',name: 'Sara', age: 46}, 
      {id: 'vasdf3',name: 'Alex', age: 21}
    ],
    showCockpit: true
  });

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

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
  console.log('[App.js] render')

  let persons = null;
  

  if(this.state.showPersons){
    
    persons = <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
  }

  

return (
 
    <WithClass classes={classes.App}>
      <button onClick = {() => this.setState({showCockpit: false})}>Remove Cockpit</button>
      
      {this.state.showCockpit ? <Cockpit 
      showPersons ={this.state.showPersons}
        personsLength = {this.state.persons.length} 
        clicked = {this.togglePersonsHandler} /> : null }
        {persons}  

    </WithClass>
    
  );
}
}




export default App ;
