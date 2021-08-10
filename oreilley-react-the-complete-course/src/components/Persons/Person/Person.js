import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; 

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render(){

    console.log('[Person.js] rendering...')

    return (
        
        //Wrapping elements in an Aux(high order component) component.

        <Aux>
            
            {this.context.authenticated ? (
                <p>Authenticated!</p>
            ) : ( 
                <p>Please log in</p>
            )}
            
            <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>

            <p key='i2'>{this.props.children}</p>

            <input 
                key='i3' 
                ref = {this.inputElementRef}
                //ref={(inputEl) => {this.inputElement = inputEl}}
                type='text' 
                onChange = {this.props.changed} 
                value={this.props.name} />
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);