import React, {Component} from "react";
import '../BasicMain.css'
import {NavLink, Redirect} from "react-router-dom";
import './Articles.css'

class ArticleItemShort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toArticle: false,
            articleId: 0
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
            <div className="article-items color-container-1">
                <p className={"title-article"}>{this.props.articleName}</p>
                <div className={"short-desc"}>{this.props.desc}</div>
                <div className={"link-article-1"} onClick={event => this.goToArticle(event)}><p>read further</p></div>
                <div><p>Go to comments</p></div>
            </div>
        );
    }
}

export default ArticleItemShort

