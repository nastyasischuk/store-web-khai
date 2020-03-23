import React, {Component} from "react";
import '../Layout.css'
import './Menu.css'

function Search() {

    return (
        <div className="search-item">
        <form name="search-form">
            <input type="text" name="search"/>
            <label for="search">Search</label>
        </form>
        </div>
    );
}

export default Search
