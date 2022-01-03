import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant"

export default function configureStore(initialState){
    const composeEnhanchers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
return createStore(rootReducer,initialState, composeEnhanchers(applyMiddleware(reduxImmutableStateInvarient())));
}