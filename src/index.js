import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App/App";
import rootReducer from "./redux/reducers/rootReducer";
import "./index.css";

const composedEnhancer = composeWithDevTools({ trace: true });
const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);
