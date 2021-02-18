import './App.css';
import React from 'react';
import CardList from './CardList';
import FindProfileForm from './FindProfileForm';



class App extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     profiles:testData
  //   }
    
  // }

  addNewProfile=(data)=>{
    this.setState({ profiles:[...this.state.profiles,data]});
    console.log(data);
  }
  
state={
  profiles:[]
}
  render(){

    return  <div className="App">
    <header className="Header">
     {this.props.title}
     <FindProfileForm  addNewProfile={this.addNewProfile} />
     <CardList profiles={this.state.profiles} />
    </header>

    </div>

  }

}

export default App;

  