import React  from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"
import Header from "./common/Header";
function App(){

    function getPage(){
        const route=window.location.pathname;
        if(route==="/about") return <AboutPage/>;
    
        return <HomePage/>
    }
    return(
        <React.Fragment>
            <Header></Header>
            {getPage()}
        </React.Fragment>

    )
   

}

export default App;
