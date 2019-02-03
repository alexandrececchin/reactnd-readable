import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CommentEditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            body: '',
            postId: '',
            commentError: ''
        }
    }
    componentWillMount () {
        this.setState({
            id: this.props.id,
            body: this.props.body,
            postId: this.props.parentId,
            commentError: ''
        })
    }


    handleCommentChange = (e) => {
        this.setState({ body: e.target.value }, () => {
            this.validateComment()
        });
    }

    validateComment = () => {
        const { body } = this.state
        this.setState({
            commentError:
                body.length > 3 ? null : 'A comment must be longer than 3 characters'
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, body, postId } = this.state
        const params = {
            id, body,
            timestamp: Date.now(),
        };
        this.props.handleSubmit(params, id, postId)
    }
    handleCancel = (e) => {
        e.preventDefault()
        this.props.handleCancel();
    }
    render() {
        return (
            <Fragment>
                <form>
                    <div className={`form-group ${this.state.commentError ? 'has-error' : ''} `}>
                        <label htmlFor="comment-text">Comment: </label>
                        <div id="comment-text" className="img-push">
                            <textarea value={this.state.body}
                                type="text" onChange={this.handleCommentChange}
                                className="form-control input-sm"
                                placeholder="Press enter to post comment"
                            />
                            <span>{this.state.commentError}</span>
                        </div>
                    </div>
                    <div className="box-body btn-group pull-right">
                        <button type="button" className="btn btn-block btn-primary btn-xs"
                            onClick={this.handleSubmit}
                            disabled={this.state.commentError}>
                            Save
                         </button>
                        <button type="button" className="btn btn-block btn-default btn-xs"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

CommentEditView.propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default CommentEditView;