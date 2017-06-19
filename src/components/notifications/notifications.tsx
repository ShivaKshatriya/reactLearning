import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import NotificationItem from './notification-item';
import { dismissNotification } from './actions';
import { Store } from './reducers';
import '../../styles/components/notifications-list.css';

interface OwnProps {
};

interface ConnectedState {
    notifications: Store.Notification[]
};

interface ConnectedDispatch {
    dismiss: (id: number) => void;
};

const mapStateToProps = (state: Store.All, listProps: OwnProps): ConnectedState => ({
    notifications: state.notifications
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
    dismiss: (id: number) => (dispatch(dismissNotification(id)))
});

class NotificationsList extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    public render() {
        let { notifications, dismiss  } = this.props;
        return (
            <div className="notifications-list">
                {notifications.length > 0 ? (
                    <ul>
                        {notifications.map((notification: Store.Notification) => {
                            return (
                                <NotificationItem
                                    dismiss={dismiss}
                                    notification={notification}
                                    key={notification.id.toString()}
                                />
                            );
                        })}
                    </ul>
                ) : (
                    <p><em>No notifications</em></p>
                )}
            </div>
        );
    }
}

export const Notifications: React.ComponentClass<OwnProps> 
                            = connect(mapStateToProps, mapDispatchToProps)(NotificationsList);