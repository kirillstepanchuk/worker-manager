import React, {Suspense, lazy} from 'react';
import { Route, Switch, Redirect, useLocation} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { GlobalStyle, Wrapper } from './style.js'
const Workers = lazy(() => import('../pages/Workers/Workers.jsx'));
const BigWorker = lazy(() => import('../modals/BigWorker/BigWorker.jsx'));
const EditWorker = lazy(() => import('../modals/EditWorker/EditWorker.jsx'));
const AddWorker = lazy(() => import('../modals/AddWorker/AddWorker.jsx'));

const App = () => {  
    const location = useLocation()
    const background = location.state && location.state.background;
    
    return (
        <Wrapper>
            <GlobalStyle />
            <Suspense fallback={<CircularProgress />}>
                <Switch location={background || location}>
                    <Route exact path="/workers" children={<Workers />} />
                    <Redirect to="/workers"/>
                </Switch>
                {background && <Route path="/worker/:id" children={<BigWorker />} />}
                {background && <Route path="/worker-edit/:id" children={<EditWorker />} />}
                {background && <Route path="/worker-add" children={<AddWorker />} />}
            </Suspense>
        </Wrapper>
    )
}

export default App;

