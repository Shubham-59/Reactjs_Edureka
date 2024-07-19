import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Default import for redux-thunk
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
