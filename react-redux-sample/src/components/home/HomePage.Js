import React from "react"
import {Link} from "react-router-dom"


class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div >
            <h1>Firt Sample </h1>
            <p>React, Redux, and React</p>
            <Link to="/about" className="btn btn-primary btn-lg">
                More
            </Link>
            </div>
        )
    }
    
}


export default HomePage;
