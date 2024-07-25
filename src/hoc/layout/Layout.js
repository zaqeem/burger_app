import React, { Component } from 'react'
import Auxs from "../Auxs/Auxs"
import './Layout.css'
import Toolbar from "../../component/Navigation/Toolbar/Toolbar"
import Sidedrawer from "../../component/Navigation/Sidedrawer/Sidedrawer"

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        });
    }

    render() {
        return (
            <Auxs>
                <Toolbar ToggleHandler={this.SideDrawerToggleHandler} />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className="content">
                    {this.props.children}
                </main>
            </Auxs>
        )
    }
}

export default Layout;
