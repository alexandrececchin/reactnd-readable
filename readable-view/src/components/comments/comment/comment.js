import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from "../../../Util/util";

class comment extends Component {
  render() {
    console.log(this.props.comment)
    const { author, body, timestamp, voteScore } = this.props.comment || {}
    return (
      <Fragment>
        <div className="box-footer box-comments">
          <div className="box-comment">
            <div className="comment-text" style={{ marginLeft: "10px" }}>
              <span className="username">
                {author}
                <span className="text-muted pull-right">{formatDate(timestamp)} - vote: {voteScore}</span>
              </span>
              {body}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


function mapStateToProps({comments}, {commentId}) {
  let comment = comments[commentId];
  return {
    comment,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect( mapStateToProps,)(comment);

