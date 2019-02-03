import React, { Component } from 'react';
import { connect } from 'react-redux';

class loading extends Component {
    render() {
        const {isLoading} = this.props
        const active = isLoading ? 'active': ' '
        return (
            <div className={`ui ${active} dimmer indeterminate`} style={{ position: 'fixed', zIndex: '1035' }}>
                <div className="ui big text loader">Loading...</div>
            </div>
        );
    }
}

function mapStateToProps({isLoading}) {
    return {
        isLoading
    };
}

export default connect(mapStateToProps)(loading);