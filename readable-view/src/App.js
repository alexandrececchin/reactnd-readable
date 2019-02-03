import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './container/dashboard';
import PostDetail from './container/postDetail';
import PageNotFound from './Util/PageNotFound';
import { Creators as CategoryActions } from './redux/category/categoryActions';
import PropTypes from 'prop-types';
import Loading from './container/loading';
import Notifacations from './container/notifacations';
import PostModal from './components/posts/post/postModal';

class App extends React.Component {
  static propTypes = {
    fetchCategoriesRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchCategoriesRequest } = this.props;
    fetchCategoriesRequest();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Loading />
          <Header />
          <SideBar categories={this.props.categories} />
          <div className="content-wrapper">
            <Notifacations />
            <section className="content">
              <PostModal />
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

const Header = props => {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <span className="logo-mini">
          <i className="fa fa-home" />
        </span>
        <span className="logo-lg">
          <b>Home</b>
        </span>
      </a>
      <nav className="navbar navbar-static-top">
        <a href="/#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
      </nav>
    </header>
  );
};

const SideBar = props => {
  const categories = props.categories;
  return (
    <div className="main-sidebar">
      <ul className="sidebar-menu">
        <li className="active ">
          <a href="/#">
            <i className="fa fa-dashboard" /> <span>Category</span>
          </a>
          <ul className="treeview-menu">
            {Object.keys(props.categories).map(key => (
              <li key={key}>
                <Link to={'/' + categories[key].path}>{categories[key].name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

function mapStateToProps({ categories }) {
  return {
    categories: categories
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
