import React, { Suspense, lazy } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { GlobalStyle, Wrapper } from './style';

const Workers = lazy(() => import('../pages/Workers/Workers'));
const BigWorker = lazy(() => import('../../containers/pages/BigWorker/BigWorkerContainer'));
const EditWorker = lazy(() => import('../../containers/pages/EditWorker/EditWorkerContainer'));
const AddWorker = lazy(() => import('../../containers/pages/AddWorker/AddWorkerContainer'));

const App = function () {
  return (
    <Wrapper>
      <GlobalStyle />
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/workers"><Workers /></Route>
          <Route path="/worker/:id"><BigWorker /></Route>
          <Route path="/worker-edit/:id"><EditWorker /></Route>
          <Route path="/worker-add"><AddWorker /></Route>
          <Redirect to="/workers" />
        </Switch>
      </Suspense>
    </Wrapper>
  );
};

export default App;
