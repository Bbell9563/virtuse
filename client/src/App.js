import React from 'react';
import FetchUser from './components/FetchUser'
import './App.css';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import { Switch, Route, } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import { WebPage } from './styles/AppStyle'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <FetchUser>
        <WebPage style={{ minHeight: window.innerHeight }}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </WebPage>
      </FetchUser>
    </div>
  );
}

export default App;
