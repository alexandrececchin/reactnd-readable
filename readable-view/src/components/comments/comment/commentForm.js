import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Creators as CommentActions } from '../../../redux/comment/commentActions';

const initialState = {
    author: '',
    comment: '',
    postId: ''
}
class commentForm extends Component {
    constructor(props) {
        super();
        this.state = initialState
    }
    componentWillMount() {
        this.setState({ postId: this.props.postId })
    }

    handleClean = (e) => {
        e.preventDefault();
        this.setState(initialState);
    }

    handleAuthorChange = (e) => {
        this.setState({ author: e.target.value });
    }

    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { addCommentRequest } = this.props;
        const params = {
            id: uuid.v4().replace(/-/g, ''),
            author: this.state.author,
            body: this.state.comment,
            timestamp: Date.now(),
        };
        addCommentRequest(params, this.state.postId);
        this.handleClean(e);
    }

    render() {
        return (
            <div className="box-footer">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="comment-author">Author:</label>
                        <input id="comment-author" onChange={this.handleAuthorChange}
                            type="text" value={this.state.author}
                            className="form-control input-sm"
                            placeholder="Press enter the author name" />
                    </div>
                    <div>
                        <label htmlFor="comment-text">Comment: </label>
                        <div id="comment-text" className="img-push">
                            <textarea value={this.state.comment}
                                type="text" onChange={this.handleCommentChange}
                                className="form-control input-sm"
                                placeholder="Press enter to post comment"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="submit" className="pull-left btn btn-block btn-xs">
                                Save
                         </button>
                        </div>
                        <div className="col-sm-2">
                            <button onClick={this.handleClean} className="pull-left btn btn-block btn-xs">
                                cancel
                             </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(CommentActions, dispatch);


export default connect(null,mapDispatchToProps)(commentForm);