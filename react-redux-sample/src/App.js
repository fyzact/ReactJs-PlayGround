import React from "react";
import {Route} from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import HomePage from  "./components/home/HomePage";

function App(){
    return (

        <div className="container-fluid">
        <Route exact path="/" component={HomePage}  />
        <Route  path="/about" component={AboutPage}  />
        </div>
    );
}

export default App;