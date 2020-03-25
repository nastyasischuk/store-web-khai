import React, {Component} from "react";
import '../BasicMain.css'
import ArticleItemShort from "./ArticleItemShort";
import {articles} from "./AllArticles";


class ArticleList extends Component {
    constructor(props) {
        super(props);
    }
    getArticles = () => {
        console.log(articles)
        const articleItems=[];
        const temp =articles;
        temp.forEach((article,key) =>
            articleItems.push(<ArticleItemShort articleName={article.name} desc={article.shortDesc}
                                                articleId={article.id} key={article.id}/>
            ));

        return articleItems;
    }
    render() {
        return (
            <div className="color-container-1">
                {this.getArticles()}
            </div>
        );
    }
}

export default ArticleList
