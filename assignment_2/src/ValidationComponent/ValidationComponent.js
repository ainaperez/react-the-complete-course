import React from 'react'; 

const validationComponent = (props) => {

    if(props.textLength.length >= 5){
        return <p>Text is long enough</p>
    }else{
        return <p>Text is too short</p>
    }
}

export default validationComponent;