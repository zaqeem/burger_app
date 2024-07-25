import React from "react";
// import classes from './Toolbar.css'
import './Toolbar.css'
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle"
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.ToggleHandler} />

        <Logo height="80%" />

        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)
export default Toolbar;