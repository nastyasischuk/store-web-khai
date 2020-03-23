import React, {Component} from "react";
import '../Layout.css'
import './Menu.css'
import MenuItem from "./MenuItem";
import {useRouteMatch} from "react-router-dom";

function Menu() {
    let {path, url} = useRouteMatch();
    return (
        <div className="menu-main ">
            <MenuItem itemName="Articles" pathTo={`articles/`}/>
            <MenuItem itemName="Catalog" pathTo={`catalog/`}/>
            <MenuItem itemName="Gallery" pathTo="/gallery"/>
            <MenuItem itemName="Registration" pathTo="/registration"/>
            <MenuItem itemName="Contacts" pathTo="/contacts"/>
        </div>
    );
}

export default Menu
