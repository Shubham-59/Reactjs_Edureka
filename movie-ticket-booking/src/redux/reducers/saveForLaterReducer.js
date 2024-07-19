// src/redux/reducers/saveForLaterReducer.js
const initialState = [];

const saveForLaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_SAVE_FOR_LATER':
      return [...state, action.movie];
    case 'REMOVE_FROM_SAVE_FOR_LATER':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default saveForLaterReducer;
