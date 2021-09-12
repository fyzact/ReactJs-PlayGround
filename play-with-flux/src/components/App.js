import React  from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"
import Header from "./common/Header";
import CoursesPage from "./CoursePage"
import {Route} from "react-router-dom"
import NotFoundPage from "./NotFoundPage";
import { Switch,Redirect, Router } from "react-router";
import ManageCoursePage from "./ManageCoursePage";

function App(){

    
    return(
        <React.Fragment>
        <Header></Header>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route  component={NotFoundPage} />
        </Switch>
        </React.Fragment>

    )
   

}

export default App;
