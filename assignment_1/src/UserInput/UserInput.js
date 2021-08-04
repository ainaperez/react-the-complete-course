import React from 'react'; 
import './UserInput.css';

const userInput = (props) =>{
    return(
        <input 
        className = 'userInput'
        type='text' 
        onChange = {props.changed}
        value = {props.currentName} />
    )
};

export default userInput
