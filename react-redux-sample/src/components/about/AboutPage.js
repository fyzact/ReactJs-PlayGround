import React from "react"


class AboutPage extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div>
            <h2>About</h2>
            <p>
                This app uses React, Redux, React Router
            </p>
        </div>
        )
    }
    
}

export default AboutPage;