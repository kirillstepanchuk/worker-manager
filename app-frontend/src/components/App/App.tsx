import React, { Suspense, lazy } from 'react';
import {
  Route, Switch, Redirect, useLocation,
} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { GlobalStyle, Wrapper } from './style';

const Workers = lazy(() => import('../pages/Workers/Workers'));
const BigWorker = lazy(() => import('../modals/BigWorker/BigWorker'));
const EditWorker = lazy(() => import('../modals/EditWorker/EditWorker'));
const AddWorker = lazy(() => import('../modals/AddWorker/AddWorker'));

const App = function () {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Wrapper>
      <GlobalStyle />
      <Suspense fallback={<CircularProgress />}>
        <Switch location={background || location}>
          <Route path="/workers"><Workers /></Route>
          <Redirect to="/workers" />
        </Switch>
        {background && (
          <Route path="/worker/:id"><BigWorker /></Route>
        )}
        {background && (
          <Route path="/worker-edit/:id"><EditWorker /></Route>
        )}
        {background && (
          <Route path="/worker-add"><AddWorker /></Route>
        )}
      </Suspense>
    </Wrapper>
  );
};

export default App;
