import './App.css';
import React from 'react';
import CardList from './CardList';

class App extends React.Component{

  render(){

    return  <div className="App">
    <header className="Header">
     {this.props.title}
     <CardList/>
    </header>

    </div>

  }

}

export default App;

  