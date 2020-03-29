import React, {Component} from "react";
import '../BasicMain.css'
import {images} from "./Images";
import './Gallery.css'
import Image from "./Image";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.getImages = this.getImages.bind(this);
    }

    getImages = () => {
        let list = [];
        images.forEach(image => {
            console.log("immm"+image.src);
            list.push(<Image src={image.src}/>);
        })
        console.log("immm"+images);
        return list;
    }

    render() {
        return (
            <div className="color-container-1 ">
                <p className="title-main">Gallery</p>
                <div className={"gallery"}>
                {this.getImages()}
                </div>
            </div>
        );
    }
}

export default Gallery
