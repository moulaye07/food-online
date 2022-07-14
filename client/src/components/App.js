import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';



const App =  () => {
    return (
      <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
    };


export default App;
