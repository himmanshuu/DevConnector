import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Link } from 'react-route';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utlis/setAuthToken';
import { loadUser } from './actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
