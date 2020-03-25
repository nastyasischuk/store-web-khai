import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import FullApp from "./components/base/FullApp";

function App() {
    return (
        <Router path="/MakeUp/" exact>
            <FullApp/>
        </Router>
    );
}

export default App;
