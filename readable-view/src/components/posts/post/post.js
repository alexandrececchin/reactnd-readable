import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from "../../../Util/util";

class post extends Component {
  render() {
    const { post } = this.props
    const { author, body, category, id, timestamp, title, voteScore } = post || {}
    return (
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="text-center">
            <h3><a href={"/" + category + "/" + id}>{title}</a></h3>
          </div>

          <div className="user-block">
            <span>
              <a href="/#">{author}</a>
            </span>
            <span className="description" style={{ marginLeft: "0px" }}>{formatDate(timestamp)}</span>
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
            {body}
          </p>
          <button type="button" className="btn btn-default btn-xs">
            <i className="fa fa-plus" />
          </button>
          <span className="text-muted"> {voteScore} </span>
          <button type="button" className="btn btn-default btn-xs">
            <i className="fa fa-minus" />
          </button>
        </div>
      </div >
    );
  }
}

function mapStateToProps({ posts }, { id }) {
  let post = posts[id];
  return {
    post
  };
}

export default connect(mapStateToProps)(post);