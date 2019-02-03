import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notifacations extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.time !== prevProps.time) {
      const { type, message } = this.props;
      this.createNotication(type, message);
    }
  }

  createNotication = (type, message) => {
    console.log('teste');
    switch (type) {
      case 'warning':
        NotificationManager.warning(message || '', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error(message || '', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
        NotificationManager.success(message || '', 'Success');
    }
  };

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}

function mapStateToProps({ notification }) {
  const { type, message, time } = notification;
  return { type, message, time };
}

export default connect(mapStateToProps)(Notifacations);
