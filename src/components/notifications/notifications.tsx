import * as React from 'react';
import NotificationItem from './notification-item';
import '../../styles/components/notifications-list.css';

export default function() {
    return (
        <div className="notifications-list">
            <ul>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ul>
        </div>
    );
}