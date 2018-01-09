import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Landing from './components/Landing/Landing.js'
import Header from './components/Header/Header'

import About from './components/About/About'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import PageNotFound from './components/PageNotFound/PageNotFound'
import AccountInformation from './components/AccountInformation/AccountInformation'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'

import { Provider } from 'react-redux'
import createStore from './store/createStore'

import './App.css';

const store = createStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                <div className="App">
                    <header className="App-header">
                        <Header/>
                    </header>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile/:id" component={Profile} />
                        <Route path="/" exact component={Landing} />
                        <AuthenticatedRoute path="/account-information" component={AccountInformation} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
