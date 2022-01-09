import * as actionTypes from "../actions/actionTypes"
import initialState from '../reducers/initialState';

export default function authorReducers(state=initialState.authors, action)
{
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS:
            return action.authors;
        default:
            return state;
    }
}