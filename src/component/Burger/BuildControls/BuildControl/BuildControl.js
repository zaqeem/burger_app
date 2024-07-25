import React from "react";
import './BuildControl.css'
const BuildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.delete} disabled={props.disable}>less</button>
        <button className="More" onClick={props.added}>more</button>
    </div>
)
export default BuildControl;