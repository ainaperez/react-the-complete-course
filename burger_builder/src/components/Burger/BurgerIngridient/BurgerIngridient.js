import React from 'react';
import classes  from './burgerIngridient.module.css'
import PropTypes from 'prop-types'
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

const burgerIngridient = (props) => {
    let ingridient = null; 

    switch(props.type) {
        case('bread-bottom'):
            ingridient = <div className = {classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingridient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
            break;
        case('meat'): 
            ingridient = <div className={classes.Meat}></div>;
            break; 
        case('cheese'): 
            ingridient = <div className={classes.Cheese}></div>;
            break;
        case('salad'):
            ingridient = <div className={classes.Cheese}></div>;
            break;
        case('Bacon'):
            ingridient = <div className={classes.Bacon}></div>; 
            break;
        default: 
            ingridient = null;

    }return ingridient;
}; 

BurgerBuilder.propTypes = {
    type: PropTypes.string
}

export default burgerIngridient;