// src/redux/reducers/movieReducer.js
const initialState = [];

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return action.payload;
    case 'FETCH_MOVIES_FAILURE':
      return [];
    default:
      return state;
  }
};

export default movieReducer;
