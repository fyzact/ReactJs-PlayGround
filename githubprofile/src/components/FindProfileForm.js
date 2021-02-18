import React, { Component }  from 'react';
import axios from 'axios';


class FindProfileForm extends  Component {
    // userInput=React.createRef();
    handleSubmit=async (event)=>{
        event.preventDefault();
        // console.log(this.userInput.current.value);
        console.log(this.state.userName);
       var resp=await axios.get(`https://api.github.com/users/${this.state.userName}`);
       this.props.addNewProfile(resp.data);
       this.setState({
           userName:''
       });
    }
    state={
        userName:""
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Texting Github UserName" 
                value={this.state.userName} 
                onChange={event=>this.setState({userName:event.target.value})} required></input>
                <button>Add Card List</button>
            </form>
          );
    }
}
 
export default FindProfileForm;