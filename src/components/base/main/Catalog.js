import React, {Component} from "react";
import './BasicMain.css'
class Catalog extends Component {
    render() {
        return (
            <div className=" color-container-1">
                <p className="title-main">Catalog</p>
                <div className={"catalog-list"}>
                <h3>Make up</h3>
                <ul>
                    <li>Eyes</li>
                    <li>Brows</li>
                    <li>Skin</li>
                    <li>Lips<sup>new</sup></li>
                    <li>Eyelashes</li>
                </ul>
                <h3>Perfumes</h3>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Children's </li>
                </ul>
                <h3>Accessories<sup>new</sup></h3>
                <ul>
                    <li>For hair</li>
                    <li>For makeup</li>
                    <li>Other</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Catalog
