import {combineReducers} from 'redux';
import { firstReducer, secondReducer } from './firstReducer';

export const appstate = combineReducers({
    first: firstReducer,
    second: secondReducer
})