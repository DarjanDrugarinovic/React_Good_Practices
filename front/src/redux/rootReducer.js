// import { combineReducers } from 'redux';
import { appReducer } from './app/slices';
import { homeReducer } from '../pages/home/redux/slices';

/**
 * There is no more need for combineReducers,
 * the slice reducers were automatically
 * passed to combineReducers() in configureStore
 *
 * export default combineReducers({
 *   app: appReducer,
 *   home: homeReducer
 * });
 */

const rootReducer = {
  app: appReducer,
  home: homeReducer
};

export default rootReducer;
