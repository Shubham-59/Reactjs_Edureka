// src/redux/actions/movieActions.js
import axios from 'axios';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/movies');
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_FAILURE', error });
  }
};
