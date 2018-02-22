import { combineReducers } from 'redux';
import houseDataReducer from './house-data-reducer';

const rootReducer = combineReducers({
  houseData: houseDataReducer
});

export default rootReducer;
