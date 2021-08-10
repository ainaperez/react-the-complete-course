import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';
import AuthContext from '../context/auth-context'

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
    showCockpit: true, 
    changeCounter: 0,
    authenticator : false,
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

  this.setState((prevState, props) => { 
    return {
      persons: persons, 
      changeCounter: prevState.changeCounter + 1 }
    });
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

loginHandler = () => {
  this.setState({authenticator: true})
}

render() {
  console.log('[App.js] render')

  let persons = null;
  

  if(this.state.showPersons){
    
    persons = <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} 
          isAuthenticated = {this.state.authenticator}/>
  }

  

return (
 
    <Aux>
      <button 
      onClick = {() => this.setState({showCockpit: false})
      }>Remove Cockpit</button>

      <AuthContext.Provider value={{
        authenticated: this.state.authenticator, 
        login: this.loginHandler}}>
      {this.state.showCockpit ? <Cockpit 
        showPersons ={this.state.showPersons}
        personsLength = {this.state.persons.length} 
        clicked = {this.togglePersonsHandler} 
        login = {this.loginHandler}
        /> : null }
      {persons}
      </AuthContext.Provider>  

    </Aux>
    
  );
}
}




export default withClass(App, classes.App) ;
