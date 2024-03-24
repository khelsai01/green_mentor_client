import { legacy_createStore, combineReducers, applyMiddleware }  from "redux";
import { thunk } from "redux-thunk";
import {reducer as authReducer}  from "../Redux/authentication/reducer";
import {reducer as taskReducer} from "../Redux/task/reducer"

const rootreducer = combineReducers({
 authReducer,
 taskReducer
})
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))