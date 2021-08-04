import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'; 
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

state = ({
  userNames:[
    {userName: 'Marla4560'}, 
    {userName: 'karl98'}
  ]
  }); 

changeUserNameHandler = (newUserName) => {
  this.setState({
    userNames:[
      {userName: newUserName}, 
      {userName: newUserName}
    ]
  })

}

userNameChangedHandler = (event) =>{
  this.setState({
    userNames:[
      {userName: event.target.value}, 
      {userName: event.target.value}
      ]
    
  })
}

render(){

  const h1Style  = {
    color: 'pink',
    fontSize: '26px'
  }

  return (
    <div className="App">
      <h1 style = {h1Style}>Hi!</h1>
      <p>I'm a simple React app for practice :)</p>
    <UserInput changed= {this.userNameChangedHandler} currentName = {[this.state.userNames[0].userName,this.state.userNames[1].userName]}></UserInput>
     <UserOutput 
     userName = {this.state.userNames[0].userName}  />
     <UserOutput userName = {this.state.userNames[1].userName}></UserOutput>
     
       
    </div>
  );
}
}

export default App;
