import React from 'react';
import { Route, Switch, Redirect, useLocation} from 'react-router-dom';

import Workers from '../pages/Workers/Workers.jsx';
import BigWorker from '../common/BigWorker/BigWorker.jsx';
import EditWorker from '../common/EditWorker/EditWorker.jsx';
import { GlobalStyle, Wrapper } from './style.js'
import ModalWrapper from '../common/ModalWrapper/ModalWrapper.jsx';
import AddWorker from '../common/AddWorker/AddWorker.jsx';

const App = () => {  
    const location = useLocation()
    const background = location.state && location.state.background;
    
    return (
        <Wrapper>
            <GlobalStyle />
            <Switch location={background || location}>
                <Route exact path="/workers" children={<Workers />} />
                <Redirect to="/workers"/>
            </Switch>
            {background && <Route path="/worker/:id" children={<ModalWrapper><BigWorker /></ModalWrapper>} />}
            {background && <Route path="/worker-edit/:id" children={<ModalWrapper><EditWorker /></ModalWrapper>} />}
            {background && <Route path="/worker-add" children={<ModalWrapper><AddWorker /></ModalWrapper>} />}
        </Wrapper>
    )
}

export default App;

