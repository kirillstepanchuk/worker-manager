import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from "./components/App/App.jsx";
import root from './store/reducers/root';
import initialState from './store/initialState';
import sagaWatcher from './store/sagas/watcher';

const saga = createSagaMiddleware();
const store = createStore(root, initialState, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

const theme = createTheme({
    palette: {
        primary: {
            main: "#B9C4C9",
        },
        white: {
            main: "#ffffff"
        }
    },
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));