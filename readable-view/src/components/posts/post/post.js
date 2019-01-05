import React from 'react';

const post = props => {
  return (
    <div class="box box-widget">
      <div class="box-header with-border">
        <div class="user-block">
          <img
            class="img-circle"
            src="../dist/img/user2-160x160.jpg"
            alt="User"
          />
          <span class="username">
            <a href="/#">Jonathan Burke Jr.</a>
          </span>
          <span class="description">Shared publicly - 7:30 PM Today</span>
        </div>
      </div>
      <div class="box-body">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at
        </p>
        <p>
          the coast of the Semantics, a large language ocean. A small river
          named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of
          sentences fly into your mouth.
        </p>
        <div class="attachment-block clearfix">
          <img
            class="attachment-img"
            src="../dist/img/photo1.png"
            alt="Attachment "
          />
          <div class="attachment-pushed">
            <h4 class="attachment-heading">
              <a href="http://www.lipsum.com/">Lorem ipsum text generator</a>
            </h4>
            <div class="attachment-text">
              Description about the attachment can be placed here. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry...{' '}
              <a href="/#">more</a>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-default btn-xs">
          <i class="fa fa-share" /> Share
        </button>
        <button type="button" class="btn btn-default btn-xs">
          <i class="fa fa-thumbs-o-up" /> Like
        </button>
        <span class="pull-right text-muted">Votes</span>
      </div>

      <div class="box-footer box-comments">
        <div class="box-comment">
          <img
            class="img-circle img-sm"
            src="../dist/img/user3-128x128.jpg"
            alt="User"
          />
          <div class="comment-text">
            <span class="username">
              Maria Gonzales
              <span class="text-muted pull-right">8:03 PM Today</span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
          </div>
        </div>
        <div class="box-comment">
          <img
            class="img-circle img-sm"
            src="../dist/img/user5-128x128.jpg"
            alt="User"
          />
          <div class="comment-text">
            <span class="username">
              Nora Havisham
              <span class="text-muted pull-right">8:03 PM Today</span>
            </span>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>
      </div>
      <div class="box-footer">
        <form action="#" method="post">
          <img
            class="img-responsive img-circle img-sm"
            src="../dist/img/user4-128x128.jpg"
            alt="Alt Text"
          />
          <div class="img-push">
            <input
              type="text"
              class="form-control input-sm"
              placeholder="Press enter to post comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default post;
