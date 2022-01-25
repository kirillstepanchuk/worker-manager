import React, { Suspense, lazy, FC } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { GlobalStyle, Wrapper } from './style';

const Workers = lazy(() => import('../pages/Workers/Workers'));
const BigWorker = lazy(() => import('../../containers/BigWorkerContainer'));
const EditWorker = lazy(() => import('../../containers/EditWorkerContainer'));
const AddWorker = lazy(() => import('../../containers/AddWorkerContainer'));

const App: FC = function () {
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
