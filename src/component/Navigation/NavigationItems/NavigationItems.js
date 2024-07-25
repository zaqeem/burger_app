import React from "react";
import './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem"
const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem Link="/" active> Burger Controler</NavigationItem>
        <NavigationItem Link="/"> Contact Now</NavigationItem>
    </ul>
)
export default NavigationItems