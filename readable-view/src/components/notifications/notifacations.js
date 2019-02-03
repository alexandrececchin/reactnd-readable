import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as NotificationActions } from '../../redux/notification/notificationAction';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notifacations extends Component {
  componentDidUpdate(prevProps) {
    if (!this.props.displayed) {
      const { type, message } = this.props;
      this.createNotication(type, message);
    }
  }

  createNotication = (type, message) => {
    switch (type) {
      case 'warning':
        NotificationManager.warning(message || '', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error(message || '', 'Error!', 5000);
        break;
      default:
        NotificationManager.success(message || '', 'Success');
    }
    const { notificationDisplayed } = this.props;
    notificationDisplayed();
  };

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(NotificationActions, dispatch);

function mapStateToProps({ notification }) {
  const { type, message, displayed } = notification;
  return { type, message, displayed };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifacations);
