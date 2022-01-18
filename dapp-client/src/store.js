import { createStore, combineReducers } from "redux";
import memory from './memory';

const reducers = combineReducers({ memory });

const store = createStore(reducers);

export default store;