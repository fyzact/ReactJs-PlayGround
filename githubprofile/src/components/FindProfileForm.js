import { Component } from "react";
import React from 'react';
class FindProfileForm extends  Component {
    state = {  }
    render() { 
        return (
            <form>
                <input type="text" placeholder="Texting Github UserName"></input>
                <button>Add Card List</button>
            </form>
          );
    }
}
 
export default FindProfileForm;