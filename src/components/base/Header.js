import React, {Component} from "react";
import './Layout.css'
import Menu from "./footer/Menuu";
import Search from "./footer/Search";

class Header extends Component {

    render() {
        return <div className="header ">
            <div className="title-header">MAKE UP</div>
            <Search/>
            <Menu></Menu>
        </div>
    }
}

export default Header
