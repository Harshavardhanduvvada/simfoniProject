
import { combineReducers } from 'redux';
import apiReducer from '../apiReducer';


const rootReducer = combineReducers({
  reducer: apiReducer,
});

export default rootReducer;
