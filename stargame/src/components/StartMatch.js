import { useState } from 'react';
import '../assets/App.css';
import mathUtils   from "../utils/math-utils";

const StarMatch = () => {
  const [stars, setStars]=useState(mathUtils.random(1,9));
  const [availableNumbers,setAwailableNumbers]=useState(mathUtils.range(1,9))
  const [candidateNumbers,setCondidateNumbers]=useState([])
  
const candidateAreWrong=mathUtils.sum(candidateNumbers)>stars;
  
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
  
  return (

    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
       <StartPlay count={stars} />
        </div>
        <div className="right">
        {mathUtils.range(1,9).map(number=>
        <ButtonNumber 
        key={number} 
        number={number} 
        status={NumberStatus(number)}
        />
       
        )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};



const ButtonNumber=(props)=> <button className="number" style={{backgroundColor:color[props.status]}} onClick={()=>console.log(props.number)}>  {props.number}</button>

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


export default StarMatch;
