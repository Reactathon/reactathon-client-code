import React, {Component} from 'react';

import Landing from './components/Landing/Landing.js'
import Header from './components/Header/Header'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <Landing />
            </div>
        );
    }
}

export default App;
