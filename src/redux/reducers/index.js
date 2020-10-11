import { combineReducers } from 'redux';
import filterReducer from './filters';
import chartReducer from './chart';
import dbReducer from './db';

const rootReducer = combineReducers({
  chart: chartReducer,
  filters: filterReducer,
  db: dbReducer
})

export default rootReducer;