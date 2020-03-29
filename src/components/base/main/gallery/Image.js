import React, {Component} from "react";
import '../BasicMain.css'
import './Gallery.css'

class Image extends Component {
    render() {
        return (
            <div className="image-element" >
                <a href={this.props.src} target="_blank">
                    <img src ={this.props.src}/>
                </a>
            </div>
        );
    }
}

export default Image;

