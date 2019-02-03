import createActionTypes from '../createActionTypes';

export const NOTIFICATION_DISPLAYED = createActionTypes('NOTIFICATION_DISPLAYED');

export const Creators = {
    notificationDisplayed: () => ({
        type: NOTIFICATION_DISPLAYED.SUCCESS,
    })
};
