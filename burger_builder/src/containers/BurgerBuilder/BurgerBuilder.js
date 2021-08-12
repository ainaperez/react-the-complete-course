import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import  BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.5,
    meat: 2, 
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0, 
            cheese: 0, 
            meat: 0,
              
        },
        price: 2,
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type]; 

        const updatedCount = oldCount +1;

        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.ingredients.price;
        const newPrice = oldPrice + priceAddition;
        this.setState({price: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]; 

        if(oldCount<=0){
            return;
        }

        const updatedCounted = oldCount -1;

        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.ingredients.price;
        const newPrice = oldPrice - priceSubstraction;
        this.setState({price: newPrice, ingredients: updatedIngredients})
    }

    

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;