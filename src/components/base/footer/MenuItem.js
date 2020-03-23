import React, {Component} from "react";
import '../Layout.css'
import './Menu.css'
import {NavLink, useRouteMatch} from "react-router-dom";

function MenuItem(props) {
    return (
        <div className="">
            <NavLink className='menu-item-style' to={props.pathTo}>
                <p>{props.itemName}</p>
            </NavLink>
        </div>
    );
}

export default MenuItem
