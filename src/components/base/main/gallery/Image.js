import React, {Component} from "react";
import '../BasicMain.css'
import './Gallery.css'

class Image extends Component {
    render() {
        return (
            <div className="image-element" >
                <img src ={this.props.src} onClick = {openImageWindow(this.props.src)}/>
            </div>
        );
    }
}

export default Image
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    console.log('open')
    window.open(src,"Image","width=" + width + ",height=" + height);
}
