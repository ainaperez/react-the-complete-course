import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import './Person.css'


class Person extends Component {
    render(){

    console.log('[Person.js] rendering...')

    return (
        
        //Wrapping elements in an Aux(high order component) component.

        <Aux>
            <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
            
            <p key='i2'>{this.props.children}</p>

            <input key='i3' type='text' onChange = {this.props.changed} value={this.props.name} />
        </Aux>
    
    
        /*example of wrapping elements in an array to return instead of creating a div or other wrapping element
        [
            <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>, 
            <p key='i2'>{this.props.children}</p>, 
            <input key='i3' type='text' onChange = {this.props.changed} value={this.props.name} />
        ]*/
       
    )
}
};

export default Person;