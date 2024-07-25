import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './Sidedrawer.css'
import Auxs from "../../../hoc/Auxs/Auxs"
import Backdrop from "../../UI/Backdrop/Backdrop"
const Sidedrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Auxs>
            <Backdrop show={props.open} clicked={props.closed} />
            < div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxs>
    )
}
export default Sidedrawer;