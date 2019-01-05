import React, { Fragment } from 'react';
import Posts from './components/posts/posts';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
            <div className="container">
              <div className="collapse navbar-collapse pull-left">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="/#">categoria 1</a>
                  </li>
                  <li>
                    <a href="/#">categoria 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="row">
              <Posts />
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
