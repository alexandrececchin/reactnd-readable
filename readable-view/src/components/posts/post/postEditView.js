import React, { Component, Fragment } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { Creators as PostActions } from '../../../redux/post/postActions';

//TODO add categoru drop box
class postEditView extends Component {
    state = {
        id: '',
        body: '',
        title: '',
        postError: '',
        titleError: ''
    }

    componentWillMount() {
        this.setState({
            id: this.props.postId,
            body: this.props.body,
            title: this.props.title,
        })
    }

    handlePostChange = (e) => {
        this.setState({ body: e.target.value }, () => {
            this.validatePost()
        });
    }

    validatePost = () => {
        const { body } = this.state
        this.setState({
            postError:
                body.length > 3 ? null : 'The post body must be longer than 3 characters'
        });
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value }, () => {
            this.validateTitle()
        });
    }

    validateTitle = () => {
        const { title } = this.state
        this.setState({
            titleError:
                title.length > 3 ? null : 'The Title must be longer than 3 characters'
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, body, title } = this.state
        this.props.handleSubmit(id, title, body)
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.handleCancel();
    }


    render() {
        return (
            <Fragment>
                <form>
                    <div className={`form-group ${this.state.titleError ? 'has-error' : ''} `}>
                        <label htmlFor="post-text">Title: </label>
                        <div id="post-text" className="img-push">
                            <input value={this.state.title}
                                type="text" onChange={this.handlePostChange}
                                className="form-control input-sm"
                                placeholder="Enter a title"
                            />
                            <span>{this.state.titleError}</span>
                        </div>
                    </div>
                    <div className={`form-group ${this.state.postError ? 'has-error' : ''} `}>
                        <label htmlFor="post-text">Post: </label>
                        <div id="post-text" className="img-push">
                            <textarea value={this.state.body}
                                type="text" onChange={this.handlePostChange}
                                className="form-control input-sm"
                                placeholder="Enter a text to post"
                            />
                            <span>{this.state.postError}</span>
                        </div>
                    </div>
                    <div className="box-body btn-group pull-right">
                        <button type="button" className="btn btn-block btn-primary btn-xs"
                            onClick={this.handleSubmit}
                            disabled={this.state.postError || this.state.titleError}>
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

function mapStateToProps({ categories }) {
    return {
        categories
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(postEditView);