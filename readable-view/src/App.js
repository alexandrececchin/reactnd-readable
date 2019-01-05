import React, { Fragment } from 'react';
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
              <div className="col-md-12">
                <div className="box">
                  <div className="box-header with-border">
                    <h3 className="box-title">Monthly Recap Report</h3>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="text-center">
                          <strong>This is text</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <div className="row">
                      <div className="col-sm-3 col-xs-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-green">
                            <i className="fa fa-caret-up" /> 17%
                          </span>
                          <h5 className="description-header">$35,210.43</h5>
                          <span className="description-text">
                            TOTAL REVENUE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
