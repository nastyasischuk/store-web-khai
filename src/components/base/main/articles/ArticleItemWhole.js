import React, {Component} from "react";
import '../BasicMain.css'

class ArticleItemWhole extends Component {
    constructor(props) {
        super(props);
    }/*this.props.location.state*/
    render() {
        return (
            <div className="color-container-1">
                <p className={"title-article"}>{this.props.location.state}</p>
                <div className={"short-desc"}></div>
                <div>Comments</div>/*comments*/
            </div>
        );
    }
}

export default ArticleItemWhole
