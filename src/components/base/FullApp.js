import React, {Component} from "react";
import './Layout.css'
import Header from "./Header";
import Footer from "./Footer";
import {Route,useRouteMatch} from "react-router-dom";
import Contacts from "./main/Contacts";
import Catalog from "./main/Catalog";
import Gallery from "./main/Gallery";
import Registration from "./main/Registration";
import Articles from "./main/Articles";



class FullApp extends Component {
    render() {

        return <div className="grid-container-main">
            <Header>

            </Header>
            <div className="color-container-1 main">
                <Route path={`/catalog`}>
                    <Catalog/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/articles">
                    <Articles/>
                </Route>
                <Route path="/contacts">
                    <Contacts/>
                </Route>
            </div>
            <Footer>

            </Footer>
        </div>
    }
}

const MainRoutes = ()=>{
}
export default FullApp
