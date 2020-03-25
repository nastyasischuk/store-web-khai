import React, {Component} from "react";
import './BasicMain.css'
import ArticleList from "./articles/ArticleList";
class Articles extends Component {
    render() {
        return (
            <div className=" color-container-1">
                <p className={"title-main"}>Articles</p>
                <ArticleList/>
            </div>
        );
    }
}

export default Articles
