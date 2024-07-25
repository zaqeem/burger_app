import React from "react";
import BurgerLogo from '../../assets/image/burger_logo.png'
import './Logo.css'
const Logo = (props) => {
    const marginBottom = props.height === '11%' ? '32px' : null;
    return (
        <div className="Logo" style={{
            height: props.height,
            marginBottom: marginBottom

        }}>
            <img src={BurgerLogo} alt="burger" />
        </div>
    )

}
export default Logo