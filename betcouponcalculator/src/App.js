import './assets/App.css';
import React, { useState } from "react";


const matches=[{
  id:1,
  host:"Fenerbahce",
  opponent :"Galatasaray",
  rates:[
   {option:"1", rate:2.00,selected:false},
   {option:"0", rate:2.60,selected:false},
   {option:"2", rate:2.90,selected:false},
 ]
},{
 id:2,
 host:"Trabzonspor",
 opponent:"Beşiktaş",
 rates:[
   {option:"1", rate:2.30,selected:false},
   {option:"0", rate:2.40,selected:false},
   {option:"2", rate:2.50,selected:false},
 ]
}];
function App() {
 const [selectedList,setSelectedList]=useState([]);
 const [matchList,setmatchList]=useState(matches);
 const selectRate=(id,selected)=>{

   const match=matchList.find(p=>p.id===id);
   const index=matchList.findIndex(p=>p.id===id);
   const oldRateIndex=match.rates.findIndex(p=>p.selected===true);
   const newRateIndex=match.rates.findIndex(p=>p.option===selected.option);
   if(oldRateIndex!==(-1)){
    matchList[index].rates[oldRateIndex].selected=false;
   }

   if(oldRateIndex!==newRateIndex)
   matchList[index].rates[newRateIndex].selected=true;

  const tempSelectedList=selectedList.filter(p=>p.id!==id);
 
  const newSelectedList= oldRateIndex!==newRateIndex ? 
  [...tempSelectedList,{id:id, host:match.host, opponent :match.opponent, predication:selected.option, rate:selected.rate }]
  :tempSelectedList;
  setSelectedList(newSelectedList);
  setmatchList(matchList);
  console.log(matchList);

 }; 


  return (
    <>
    <div className="title">All the Matches</div>
    <div className="left">
    {matchList.map(p=><Match key={p.id} selected={selectRate} match={p} />)}
    </div>

    <div className="right">
    <b>  Kupon</b>
    <br/>
    {selectedList.map(p=><SelectedMatch key={p.id}  match={p} />)}
   
   
    </div>
    <div className="footer">Total</div>
 
  </>
  );
}

const Match=(props)=>{
  const host =props.match.rates[0];
  const draw=props.match.rates[1];
  const guest=props.match.rates[2];
return (
  <div className="maclar">
        <div className="evsahibi">
          <span className="takimName">{props.match.host}</span>
          <span onClick={()=>props.selected(props.match.id,host)} style={{background: host.selected===true?"purple":"#b8a9a9"}} className="oran">{props.match.rates[0].rate.toFixed(2)}</span>
        </div>
        <div className="beraberlik">
        <span onClick={()=>props.selected(props.match.id,draw)} style={{background: draw.selected?"purple":"#b8a9a9"}}  className="oran">{props.match.rates[1].rate.toFixed(2)}</span>
        </div>
        <div className="misafir">
        <span onClick={()=>props.selected(props.match.id,guest)}  style={{background: guest.selected?"purple":"#b8a9a9"}} className="oran">{props.match.rates[2].rate.toFixed(2)}</span>
          <span className="takimName">{props.match.opponent}</span>
        </div>
      </div>
);
}

const SelectedMatch=(props)=>{
  return (
    <div style={{width:"100%"}}>
    <div style={{width:"80%", float:"left"}}> {props.match.host}  - {props.match.opponent}</div> <div style={{width:"20%", float:"left", textAlign:"right"}}> x</div> 
    <div style={{width:"80%", float:"left"}}> Mac sonucu: {props.match.predication}</div> <div style={{width:"20%", float:"left", textAlign:"right"}}> {props.match.rate}</div> 
    </div>
  )

}


export default App;
