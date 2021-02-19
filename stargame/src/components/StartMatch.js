import { useEffect, useState } from 'react';
import '../assets/App.css';
import mathUtils   from "../utils/math-utils";

const useGameState=()=>{
  const [stars, setStars]=useState(mathUtils.random(1,9));
  const [availableNumbers,setAvailableNumbers]=useState(mathUtils.range(1,9))
  const [candidateNumbers,setCandidateNumbers]=useState([])
  const[secondLeft,setSecondLeft]=useState(10);

  useEffect(()=>{
  
    if(secondLeft!==0 && availableNumbers.length>0){
      console.log("rendered");
       const timeId= setTimeout(()=>setSecondLeft(secondLeft-1),1000)
       
       return ()=> clearTimeout(timeId);
    }

  });

  const setStateGame=(newCandidateNum)=>{
console.log(newCandidateNum);
    if(mathUtils.sum(newCandidateNum)!==stars){
      setCandidateNumbers(newCandidateNum);
    }else{
      var newAvailableNum=availableNumbers.filter(n=>
        !newCandidateNum.includes(n)
      )
      setAvailableNumbers(newAvailableNum);
      setStars(mathUtils.randomSumIn(newAvailableNum,9));
      setCandidateNumbers([]);
    }
  }
 
  return {stars,availableNumbers,candidateNumbers,secondLeft,setStateGame}

}

const Game = (props) => {
 
const {
  stars,
  availableNumbers,
  candidateNumbers,
  secondLeft,
  setStateGame
}=useGameState();
 

  console.log(candidateNumbers);
  const candidateAreWrong=mathUtils.sum(candidateNumbers)>stars;
  // const gameIsDone=availableNumbers.length===0;
  // const timeIsDone=secondLeft===0;
  const gameStatus= availableNumbers.length===0?"won":secondLeft===0?"lost":"active";
 


  const NumberStatus=(number)=>{
  
    console.log(number);
    if(!availableNumbers.includes(number)){
      return "used";
    }
    if(candidateNumbers.includes(number)){
    
      return candidateAreWrong?"wrong":"candidate";
    }

    return "available";
  }

  const onNumbeClick=(number,currentStaus)=>{

    if(gameStatus!=="active" || currentStaus==="used") return;

    var newCandidateNum=currentStaus==="available"? candidateNumbers.concat(number):candidateNumbers.filter(p=>p!==number);
    setStateGame(newCandidateNum);

  }
  
  return (

    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
          gameStatus!=="active"?<PlayAgain status={gameStatus} resetGame={props.newGame}/>:  <StartPlay count={stars} />
          }
     
        </div>
        <div className="right">
        {mathUtils.range(1,9).map(number=>
        <ButtonNumber 
        key={number} 
        number={number} 
        status={NumberStatus(number)}
        onClick={onNumbeClick}
        />
       
        )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondLeft}</div>
    </div>
  );
};

const StartMatch=()=>{
const [gameId,setGameId]=useState(1);
  return <Game key={gameId} newGame={()=>setGameId(gameId+1)} />
}

const PlayAgain=(props)=>{

  return (
    <div className="game-done">
      <div 
      className="message"
      style={{color:props.status==="lost"?"red":"green"}}
      >
        {props.status==="lost"?"Game Over":"Nice"}
      </div>
    <button  style={{height:"100%",width:"100%"}} onClick={()=> props.resetGame()}>Play Again </button>
    </div>
  )

}

const ButtonNumber=(props)=> <button className="number"
 style={{backgroundColor:color[props.status]}} 
 onClick={()=>props.onClick(props.number,props.status)}>  {props.number}</button>

const StartPlay=(props)=> (
     <>
  {mathUtils.range(1,props.count).map(starId=>
    <div key={starId}  className="star" />
   )}
</>
)

const color={
  awailable:"lightGray",
  used:"lightgreen",
  wrong:"lightcoral",
  candidate:"lightblue"
}


export default StartMatch;
