import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { Creators as PostActions } from '../../../redux/post/postActions';


class postEditView extends Component {
    render() {
        return (
            <div>

            </div>
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