import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import middleware from "./middleware";
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))