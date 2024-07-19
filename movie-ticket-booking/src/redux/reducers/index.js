// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import saveForLaterReducer from './saveForLaterReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  saveForLater: saveForLaterReducer,
});

export default rootReducer;
