import React, { Component } from "react";
import Auxs from "../../hoc/Auxs/Auxs";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Burger from "../../component/Burger/Burger";
import Modal from "../../component/UI/modal/Modal";
import OrderSummary from "../../component/Burger/orderSummary/OrderSummary"


const PRICE_INGREDIENTS = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    };
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseRemove = () => {
        this.setState({
            purchasing: false
        })
    }
    conPurchase = () => {
        alert("YOU Continue")
    }

    updatePurchaseable = (ingredients) => {
        //   const ingredients = {
        //     ...this.state.ingredients
        //}
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({
            purchaseable: sum > 0
        })
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = PRICE_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseable(updatedIngredients)
    };
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = PRICE_INGREDIENTS[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,

        });
        this.updatePurchaseable(updatedIngredients)
    };

    render() {
        const disableinfo = {
            ...this.state.ingredients
        };
        for (let key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0
        }

        return (
            <Auxs>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseRemove}>
                    <OrderSummary ingredient={this.state.ingredients}
                        cancelpurchase={this.purchaseRemove}
                        continuepurchase={this.conPurchase}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientDeleted={this.removeIngredient}
                    disable={disableinfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler} />
            </Auxs>
        );
    }
}

export default BurgerBuilder;
