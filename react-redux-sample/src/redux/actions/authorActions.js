import * as authorApi from "../../api/authorApi"
import * as actionTypes from "../actions/actionTypes"
function loadAuthorsSuccess(authors){
 return {type: actionTypes.LOAD_AUTHORS, authors}
}

export  function loadAuthors(){
    return function(dispatch){
        authorApi.getAuthors().then(authors=>dispatch(loadAuthorsSuccess(authors))).catch(err=>{throw err;})
    }
}


