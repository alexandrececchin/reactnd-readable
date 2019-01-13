import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./redux/rootReducer";
import rootSaga from "./redux/rootSagas";
import logger from './logger';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware,logger)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))