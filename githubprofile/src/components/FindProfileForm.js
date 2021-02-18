import React, { Component }  from 'react';

class FindProfileForm extends  Component {
    // userInput=React.createRef();
    handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(this.userInput.current.value);
        console.log(this.state.userName);
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