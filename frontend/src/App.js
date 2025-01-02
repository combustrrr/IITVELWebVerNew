import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiments from './pages/Experiments';
import Instructions from './pages/Instructions';
import About from './pages/About';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experiments" component={Experiments} />
                <Route path="/instructions" component={Instructions} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;