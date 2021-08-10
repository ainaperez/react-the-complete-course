import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = props => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        /*setTimeout(() => {
            alert('Saved data to Cloud!');
        }, 1000);*/
        toggleBtnRef.current.click();
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
        
            <button ref={toggleBtnRef} className ={btnClass.join(' ')} onClick={props.clicked}>
            Toggle Persons</button>
            
            <button onClick={authContext.login}>Login</button> 
           
            
        </div>
    ); 
}

export default React.memo(cockpit);