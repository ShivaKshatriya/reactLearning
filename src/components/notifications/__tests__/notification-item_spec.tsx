import * as React from 'react';
import { Store } from '../reducers';
import NotificationItem from '../notification-item';
import { create } from 'react-test-renderer';

describe('component/notification-item', () => {
    it('renders correctly', () => {
        let sampleNotification = {
            id: 0,
            text: 'Test String'
        } as Store.Notification;

        let dismissDummy = function() {

        }

        const tree = create(
            <NotificationItem notification={sampleNotification} dismiss={dismissDummy} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
