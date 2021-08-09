import React, { Component } from 'react';
import classes from './App.module.css';

import Person from './Person/Person';




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
  let btnClass = [classes.button];

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
    
    btnClass.push(classes.Red)
    
    /*style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }*/
  }

  let assignedClasses = [];

  if(this.state.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

return (
 
    <div className="App">
      <h1>Hi, I am react App</h1>
      <p className={classes.join(' ')}>Is this working?</p>
      
      <button className ={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
        Show Names</button>

        {persons}  

    </div>
    
  );
}
}




export default App ;
