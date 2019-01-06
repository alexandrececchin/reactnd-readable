import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { handleInitialData } from './actions/shared';
import Dashboard from './container/dashboard';
import PostDetail from './container/postDetail';
import PageNotFound from "./Util/PageNotFound";
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { categories } = this.props;
    return (
      <Router>
        <Fragment>
          <Header categories={categories} />
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

const Header = (props) => {
  return (
    <header className="main-header">
      <nav className="navbar navbar-static-top">
        <div className="container">
          <div className="collapse navbar-collapse pull-left">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              {props.categories !== null && props.categories.length > 0 && props.categories.map(category => (
                <li key={category.path}>
                  <Link to={category.path}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

function mapStateToProps({ categories }) {
  return {
    categories,
  }
}

export default connect(mapStateToProps)(App)
