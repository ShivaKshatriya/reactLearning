export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export type Action =
    { type: 'DISMISS_NOTIFICATION', id: number } |
    { type: 'CLEAR_NOTIFICATIONS' };

export const dismissNotification = (id: number): Action => ({
    type: DISMISS_NOTIFICATION,
    id
});

export const clearNotifications = (): Action => ({
    type: CLEAR_NOTIFICATIONS
});