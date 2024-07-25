import React, { Component } from "react";
import './Modal.css'
import Auxs from "../../../hoc/Auxs/Auxs"
import Backdrop from "../Backdrop/Backdrop"
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }
  componentWillUpdate() {
    console.log("Modal update")
  }
  render() {
    const modalStyle = {
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0'
    };

    return (
      <Auxs>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className="Modal" style={modalStyle}>
          {this.props.children}
        </div>
      </Auxs>
    );
  }


}
export default Modal;
