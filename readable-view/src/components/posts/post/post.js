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

      <div className="box-footer box-comments">
        <div className="box-comment">
          <div className="comment-text" style={{ marginLeft: "10px" }}>
            <span className="username">
              Maria Gonzales
              <span className="text-muted pull-right">8:03 PM Today</span>
            </span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="box-comment">
          <div className="comment-text" style={{ marginLeft: "10px" }}>
            <span className="username">
              Nora Havisham
              <span className="text-muted pull-right">8:03 PM Today</span>
            </span>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>
      </div>
      <div className="box-footer">
        <form action="#" method="post">
          <img
            className="img-responsive img-circle img-sm"
            src="../dist/img/user4-128x128.jpg"
            alt="Alt Text"
          />
          <div className="img-push">
            <input
              type="text"
              className="form-control input-sm"
              placeholder="Press enter to post comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default post;
