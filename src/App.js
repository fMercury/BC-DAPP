import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Web3ReactManager from 'components/Web3ReactManager';
import NavBarContainer from './containers/NavBarContainer';
import FooterContainer from './containers/FooterContainer';
import ExchangeContainer from './containers/ExchangeContainer';

const App = () => {
    return (
        <HashRouter>
                    <Switch>
                        <Route exact path="/">
                        <div className="exchange-body-container">
                            <div className="app-shell">
                                <Web3ReactManager>
                                    <NavBarContainer />
                                    <ExchangeContainer />
                                    <FooterContainer />
                                </Web3ReactManager>
                            </div>
                        </div>
                        </Route>
                    </Switch>
        </HashRouter>
    );
};

export default App;
