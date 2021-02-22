import './assets/App.css';
import { useState } from "react";


const matches=[{
  id:1,
  home:"Fenerbahce",
  guest:"Galatasaray",
  rates:[
   {option:"1", rate:2.00,selected:false},
   {option:"0", rate:2.60,selected:false},
   {option:"2", rate:2.90,selected:false},
 ]
},{
 id:2,
 home:"Trabzonspor",
 guest:"Beşiktaş",
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
   const match=matches.find(p=>p.id===id);
   const index=matches.findIndex(p=>p.id===id);
   const rateIndex= matches[index].rates.findIndex(p=>p.option===selected.option);
   matches[index].rates[rateIndex].selected=true;
   console.log(match);
  console.log(`${id} - select ${selected.option} - rate${selected.rate}`)
setmatchList(matches);
 }; 


  return (
    <>
    <div className="title">All the Matches</div>
    <div className="left">
    {matchList.map(p=><Match key={p.id} selected={selectRate} match={p} />)}
    </div>

    <div className="right">Kupon</div>
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
          <span className="takimName">{props.match.home}</span>
          <span onClick={()=>props.selected(props.match.id,host)} style={{background: host.selected===true?"purple":"black"}} className="oran">{props.match.rates[0].rate.toFixed(2)}</span>
        </div>
        <div className="beraberlik">
        <span onClick={()=>props.selected(props.match.id,draw)} style={{background: draw.selected?"purple":"#b8a9a9"}}  className="oran">{props.match.rates[1].rate.toFixed(2)}</span>
        </div>
        <div className="misafir">
        <span onClick={()=>props.selected(props.match.id,guest)}  style={{background: guest.selected?"purple":"#b8a9a9"}} className="oran">{props.match.rates[2].rate.toFixed(2)}</span>
          <span className="takimName">{props.match.guest}</span>
        </div>
      </div>
);
}


export default App;
