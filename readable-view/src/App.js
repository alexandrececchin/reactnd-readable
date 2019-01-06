import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { handleInitialData } from './store/actions/shared';
import Dashboard from './container/dashboard';
import PostDetail from './container/postDetail';
import PageNotFound from "./Util/PageNotFound";
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
      <Fragment>
        <Header />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="row">
              <Switch>
                <Route exact path="/" render={() => <Dashboard />} />
                <Route exact path="/:category" render={() => <Dashboard />} />
                <Route exact path="/:category/:id" render={() => <PostDetail />} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </section>
        </div>
      </Fragment>
      </Router>
    );
  }
}

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar navbar-static-top">
        <div className="container">
          <div className="collapse navbar-collapse pull-left">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cat1/1">Categoria 1</Link>
              </li>
              <li>
                <Link to="/cat2/2">Categoria 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default connect()(App)
