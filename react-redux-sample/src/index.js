import React from  "react";
import {render} from "react-dom";
import {BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";
import "./index.css";
import configureStore  from "./redux/configureStore"
import { Provider as ReactProvider } from "react-redux";

const store=configureStore();
//creareclass component
// var SayHi1=React.createClass({
//     render:function(){
//         return (
//             <div>feyyaz</div>
//         );
//     }
// })

//

// class SayHi1 extends React.Component{

//     constructor(props) {
//         super(props);
//     }
    
//     render(){
//         return (
//             <p>Hi2 {this.props.name}</p>
//         )
//     }
    
// }

// function component
// function SayHi(props){
//     return <p>Hi {props.name}
//     </p>
// }

// const SayHi=(props)=>{
//     return <p>Hi {props.name}
//     </p>
// }

render(
<ReactProvider store={store}>
 <Router>
     <App />
 </Router>        
</ReactProvider>
        

 ,document.getElementById("app"))