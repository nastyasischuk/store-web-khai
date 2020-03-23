import React, {Component} from "react";
import '../Layout.css'
import './Menu.css'
import {NavLink, useRouteMatch} from "react-router-dom";

function MenuItem(props) {
        return (
            <div className=" color-container-1">
                <NavLink to={props.pathTo}>
                    <p>{props.itemName}</p>
                </NavLink>
            </div>
        );
}

export default MenuItem
