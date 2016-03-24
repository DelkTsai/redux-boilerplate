import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import session from './session'

const rootReducer = combineReducers({
  routing,
  session,
});

export default rootReducer;
