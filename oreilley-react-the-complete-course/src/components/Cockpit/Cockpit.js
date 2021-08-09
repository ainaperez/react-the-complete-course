import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = props => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        setTimeout(() => {
            alert('Saved data to Cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work useEffect')
        }
    }, []); 

    useEffect(() => {
        console.log('[Cockpit.js] 2n useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work useEffect')
        }
    })

    let assignedClasses = [];
    let btnClass = [classes.button];
    
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    

  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

    return (
        <div className ={classes.Cockpit} >
        <h1>Hi, I am react App</h1>
      <p className={assignedClasses.join(' ')}>Is this working?</p>
    
      <button className ={btnClass.join(' ')} onClick={props.clicked}>
        Show Names</button>
        </div>
    ); 
}

export default React.memo(cockpit);