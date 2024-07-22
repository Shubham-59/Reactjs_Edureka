Flow Summary:
Store Initialization: The store is created in store.js and passed to the Provider in index.js.

Actions: Defined in actions.js to describe the possible interactions (e.g., adding to cart, removing from cart, listing products).

Reducers:
Defined in reducers.js to handle state transitions based on the actions dispatched.
Connecting React and Redux: The App component is wrapped with the Provider to connect the Redux store to the React application.

Fetching Products:
The App component dispatches listProducts to initialize the product list.

Product List:
The ProductList component fetches products from the store and renders each product using the Product component.
Cart:
The Cart component fetches cart items from the store, calculates the total amount, and renders each item using the CartItem component.
