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
import ProtectedRoute from './components/ProtectedRoute'
import User from './components/User'

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
              <ProtectedRoute exact path='/userpage' component={User} />
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
