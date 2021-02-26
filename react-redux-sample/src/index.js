import React from  "react";
import {render} from "react-dom"



const SayHi=(props)=>{
    return <p>Hi {props.name}</p>
}

render(<SayHi  name="Feyyaz"/>,document.getElementById("app"))