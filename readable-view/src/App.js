import React, { Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from './container/dashboard';
import PostDetail from './container/postDetail';
import PageNotFound from "./Util/PageNotFound";
import './App.css';

class App extends React.Component {
  render() {
    return (
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


export default App;
