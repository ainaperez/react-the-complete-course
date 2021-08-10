import React from 'react';

//First way of creating a hoc
/*const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
)*/

//Second way. WrappedComponent starts with a capital W because it is expected to be a component

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} /> 
        </div>
    )
    
    
}

export default withClass;