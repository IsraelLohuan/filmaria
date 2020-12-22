import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Error from './pages/Error';
import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}   

export default Routes;