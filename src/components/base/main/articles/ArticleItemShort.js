import React, {Component} from "react";
import '../BasicMain.css'
import {Link, NavLink, Redirect} from "react-router-dom";
import './Articles.css'

class ArticleItemShort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toArticle: false,
        }
        this.goToArticle = this.goToArticle.bind(this);
    }

    goToArticle = ( e) => {
        e.preventDefault();
    this.setState({toArticle:true})
    }

    render() {
        if(this.state.toArticle){
            return  <Redirect push to={{
                pathname: "/article",
                search: `?id=${this.props.articleId}`,
                state: {id:this.props.articleId}
            }}  />
        }
        return (
            <div className="article-items">
                <p className={"title-article short-article-title"}>{this.props.articleName}</p>
                <div className={"short-article-text"}>{this.props.desc}</div>
                <Link exact className={"link-article-1"} to={{
                    pathname: `/articles/${this.props.articleId}`,
                    state: {
                        articleId: this.props.articleId
                    }
                }}>>>>read further</Link>
                <div><p>Go to comments</p></div>
            </div>
        );
    }
}

export default ArticleItemShort

