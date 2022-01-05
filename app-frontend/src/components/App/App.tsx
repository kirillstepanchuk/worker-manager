import React, { Suspense, lazy } from 'react';
import {
  Route, Switch, Redirect, useLocation,
} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalStyle, Wrapper } from './style';
import { Location, Background } from '../../types/location';

const Workers = lazy(() => import('../pages/Workers/Workers'));
const BigWorker = lazy(() => import('../../containers/modals/BigWorker/BigWorkerContainer'));
const EditWorker = lazy(() => import('../../containers/modals/EditWorker/EditWorkerContainer'));
const AddWorker = lazy(() => import('../../containers/modals/AddWorker/AddWorkerContainer'));

const App = function () {
  const location: Location = useLocation();
  const background: Background = location.state && location.state.background;

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
