import React from 'react';
import Card from './card';

const testData=[
    
    {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"},
    {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"},
    {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"}
]


const CardList=()=>{

    return <>
    {testData.map(profile=><Card {...profile} />)}
    </>

}

export default CardList;