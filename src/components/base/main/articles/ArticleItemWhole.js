import React, {Component} from "react";
import '../BasicMain.css'
import getArticle, {article_1, article_2, article_3} from "./AllArticles";

class ArticleItemWhole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {
                name: "",
                id: "",
                shortDesc: "",
                description: ""
            }
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id)
        let item = article(id);
        this.setState({article: item})
    }

    render() {
        return (
            <div className="">
                <p className={"article-title"}>{this.state.article.name}</p>
                <p className={"article-texts"}>{this.state.article.description}</p>
            </div>
        );
    }
}

export default ArticleItemWhole

function article(i) {
    if (i == 1)
        return article_1;
    if (i == 2)
        return article_2;
    if (i == 3)
        return article_3;
}

function getTexts(description) {
    const list = [];
    let k=0;
    for (let i = 0; i < description.length; i++) {
        list[k++] = <p>{description[i]}</p>;
        list[k++] = <p></p>
    }
    return list;
}
