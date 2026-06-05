// Root entry for the React application.
// - `Provider` from `react-redux` makes the Redux store available to all
//   nested components via `useSelector` and `useDispatch`.
// - The `store` is imported from `src/store.js` and holds the app state
//   configured with the `cart` reducer (CartSlice).
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the application with Provider so any component can access the Redux store. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
