import React from "react"
import Link from "react-router-dom"

const HomePage=()=>{
<div className="jumbotron">
<h1>Firt Sample </h1>
<p>React, Redux, and React</p>
<Link to="about" className="btn btn-primary btn-lg">
    More
</Link>
{/*React router handle click on any link component so page wont post back */}
</div>
}

export default HomePage;