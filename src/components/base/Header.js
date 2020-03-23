import React, {Component} from "react";
import './Layout.css'
import Menu from "./footer/Menuu";

class Header extends Component {

    render() {
        return <div className="header color-container-1">
            <div className="title-header">MAKE UP</div>
            <Menu></Menu>
        </div>
    }
}

export default Header
