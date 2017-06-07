import * as React from 'react';
import { Store } from './reducers';
import '../../styles/components/notification-item.css';

export default function(props: { dismiss: (id: number) => void, notification: Store.Notification }) {
    let { dismiss, notification } = props;
    let handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dismiss(notification.id);
    };

    return (
        <li className="notification-item">
            {notification.text}
            <button className="button" onClick={handleClick}>Dismiss</button>
        </li>
    );
}