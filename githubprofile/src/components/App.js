import './App.css';
import React from 'react';
import CardList from './CardList';
import FindProfileForm from './FindProfileForm';

const testData=[
    
  {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"},
  {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"},
  {avatar:"https://avatars.githubusercontent.com/u/15624650?v=4", name:"fyzact", company:"Tetris Solutions"}
]


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      profiles:testData
    }
    
  }
  

  render(){

    return  <div className="App">
    <header className="Header">
     {this.props.title}
     <FindProfileForm/>
     <CardList profiles={this.state.profiles} />
    </header>

    </div>

  }

}

export default App;

  