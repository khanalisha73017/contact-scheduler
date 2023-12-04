import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { reducer as usersReducer } from "./userReducer/reducer";
const rootReducer = combineReducers({ usersReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
