import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [timer, setTimer]=useState(10);

  const resetGame=()=>{
    setTimer(10);
  }

 useEffect(()=>{
   if(timer!==0){
    const timerId=setTimeout(()=>setTimeout(() => setTimer(timer-1),1000));
    return (()=>clearTimeout(timerId));
   }
 
 });


  return (
    <div className="App">
      <header className="App-header">
        <Button playAgain={resetGame} timerId={timer}/>
        {timer}
      </header>
    </div>
  );
}

const Button=(props)=>{
 const [counter, setCounter]=useState(0);

 const onClick=()=> setCounter(counter+1);

 const playAgain=()=>{
    setCounter(0);
    props.playAgain();

  }
return (
 
  ((props.timerId!==0) ?
  <div>
      <button  disabled={props.timerId===0} className="button background-black" onClick={onClick}>Click</button> <br/>
      <span>{counter}</span>
  </div>:
   <div>
     <div style={{marginBottom:20, height:"40"}}>
       Total Score:  <b>{counter}</b>
     </div>

       <button    className="button background-green" onClick={playAgain} >Play  Again</button> <br/>
   </div>)

)
  
}


export default App;
