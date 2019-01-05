import React from 'react';

const post = props => {
  return (
    <div className="box box-widget">
      <div className="box-header with-border">
        <div className="text-center">
          <h3><a href="/post">Title</a></h3>
        </div>

        <div className="user-block">
          <span>
            <a href="/#">Jonathan Burke Jr.</a>
          </span>
          <span className="description" style={{ marginLeft: "0px" }}>Shared publicly - 7:30 PM Today</span>
        </div>
        <div className="box-tools">
          <button type="button" className="btn btn-box-tool" data-widget="collapse">
            Edit
          </button>
          <button type="button" className="btn btn-box-tool" data-widget="delete">Delete</button>
        </div>
      </div>
      <div className="box-body">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at
          the coast of the Semantics, a large language ocean. A small river
          named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of
          sentences fly into your mouth.
        </p>
        <button type="button" className="btn btn-default btn-xs">
          <i className="fa fa-plus" />
        </button>
        <span className="text-muted"> Votes </span>
        <button type="button" className="btn btn-default btn-xs">
          <i className="fa fa-minus" />
        </button>
      </div>
    </div>
  );
};

export default post;
