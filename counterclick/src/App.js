import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [timer, setTimer]=useState(10);

 useEffect(()=>{
   if(timer!==0){
    const timerId=setTimeout(()=>setTimeout(() => setTimer(timer-1),1000));
    return (()=>clearTimeout(timerId));
   }
 
 });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button timerId={timer}/>
        {timer}
      </header>
    </div>
  );
}

const Button=(props)=>{
 const [counter, setCounter]=useState(0);

 const onClick=()=> setCounter(counter+1);

return (
 
  ((props.timerId!==0) ?
  <div>
      <button disabled={props.timerId===0} onClick={onClick}>Click</button> <br/>
      <span>{counter}</span>
  </div>:
   <div>
       <button  onClick={()=>console.log("Yeni")} >New Game</button> <br/>
       <span>{counter}</span>
   </div>)

)
  
}


export default App;
