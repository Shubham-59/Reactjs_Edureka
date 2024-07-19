// src/redux/actions/saveForLaterActions.js
export const addToSaveForLater = (movie) => ({ type: 'ADD_TO_SAVE_FOR_LATER', movie });
export const removeFromSaveForLater = (id) => ({ type: 'REMOVE_FROM_SAVE_FOR_LATER', id });
