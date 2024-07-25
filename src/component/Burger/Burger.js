import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>please start adding ingredients</p>;
    }

    console.log(transformedIngredient)
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
