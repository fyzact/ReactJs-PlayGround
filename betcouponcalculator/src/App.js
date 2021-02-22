import './assets/App.css';
import { useState } from "react";



function App() {
 const [selectedList,setSelectedList]=useState([]);
 const matchList=[{
   home:"Fenerbahce",
   guest:"Galatasaray",
   rates:[
    {option:"1", rate:2.00},
    {option:"1", rate:2.60},
    {option:"1", rate:2.90},
  ]
 },{
  home:"Trabzonspor",
  guest:"Beşiktaş",
  rates:[
    {option:"1", rate:2.30},
    {option:"0", rate:2.40},
    {option:"2", rate:2.50},
  ]
}]

  return (
    <>
    <div class="title">All the Matches</div>
    <div class="left">
    {matchList.map(p=><Match match={p} />)}
    </div>

    <div class="right">Kupon</div>
    <div class="footer">Total</div>
 
  </>
  );
}

const Match=(props)=>{
return (
  <div class="maclar">
        <div class="evsahibi">
          <span class="takimName">{props.match.home}</span>
          <span class="oran">{props.match.rates[0].rate.toFixed(2)}</span>
        </div>
        <div class="beraberlik">
        <span class="oran">{props.match.rates[1].rate.toFixed(2)}</span>
        </div>
        <div class="misafir">
        <span class="oran">{props.match.rates[2].rate.toFixed(2)}</span>
          <span class="takimName">{props.match.guest}</span>
        </div>
      </div>
);
}


export default App;
