import React from 'react';
import Card from './card';



const CardList=(props)=>{

    return <>
    {props.profiles.map(profile=><Card key={profile.login} {...profile} />)}
    </>

}

export default CardList;