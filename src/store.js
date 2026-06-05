// Import `configureStore` from Redux Toolkit to create the store.
// `configureStore` sets up the Redux store with good defaults (middleware, devtools).
import { configureStore } from '@reduxjs/toolkit';

// Import the slice reducer that manages the `cart` portion of state.
import cartReducer from './CartSlice';

// Create and configure the Redux store. The `reducer` field defines the
// top-level state keys and the reducers responsible for them. Here we assign
// `cartReducer` to the `cart` key so `state.cart` is managed by CartSlice.
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Export the configured store as the default export so it can be provided
// to the React application (see `main.jsx` where `<Provider store={store}>`).
export default store;
