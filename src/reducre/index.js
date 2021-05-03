import counterReducer from './counter'
import isLoggedReducer from './isLoged'
import { combineReducers } from 'redux';

const Rootreducers = combineReducers({
  counter  : counterReducer,
  isLogged : isLoggedReducer
});

export default Rootreducers;
