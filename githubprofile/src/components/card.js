import React from 'react';
import   './App.css';


class Card extends React.Component {
    state = {  }
    
    render() {
        const profile=this.props; 
        return ( 
            <div className="github-profile">
                <img src={profile.avatar}></img>
                <div className="info">
                    <div className="name">
                        {profile.name}
                    </div>
                    <div className="company" >
                        {profile.company}
                    </div>
                </div>
            </div>
         );
    }
}


export default Card;