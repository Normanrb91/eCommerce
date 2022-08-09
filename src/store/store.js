import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/reducer";


const reducers = combineReducers({
    reducer
})

export const store = createStore(
    reducers, 
    applyMiddleware(thunk)
);