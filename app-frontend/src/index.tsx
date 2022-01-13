import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
// import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { routerMiddleware } from 'react-router-redux';

import App from './components/App/App';
import root, { history } from './store/reducers/root';
import sagaWatcher from './store/sagas/watcher';

const router = routerMiddleware(history);
const saga = createSagaMiddleware();
const store = createStore(root, composeWithDevTools(applyMiddleware(saga, router)));

saga.run(sagaWatcher);

const theme = createTheme({
  palette: {
    primary: {
      main: '#B9C4C9',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
