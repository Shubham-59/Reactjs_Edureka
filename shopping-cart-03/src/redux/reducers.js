import { ADD_TO_CART, REMOVE_FROM_CART, LIST_PRODUCTS } from './actions';

const initialState = {
  products: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
