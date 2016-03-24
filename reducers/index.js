import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import session from './session'
import message from './message'

const rootReducer = combineReducers({
  routing,
  session,
  message,
});

export default rootReducer;
