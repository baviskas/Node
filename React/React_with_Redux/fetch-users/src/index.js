import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { reducer } from "./redux/reducers";
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { fetchUser } from './redux/actions';

const middlewares = [thunkMiddleware, logger];
const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

//Subscribing and checking if store and dispatch is functional...
// const unsubscribe = store.subscribe(() => {});
// store.dispatch(fetchUser());
// unsubscribe();


const rootElem = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElem
);
