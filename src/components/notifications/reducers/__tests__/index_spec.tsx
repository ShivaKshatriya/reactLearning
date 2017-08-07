import * as redux from 'redux';
import {} from 'jest';
import { reducers, Store } from '../index';
import {
  dismissNotification,
  clearNotifications
} from '../../actions';

describe('reducers/notification', () => {
    it('Contains default notifications', () => {
        let sampleState = {
            notifications: [
                {
                    id: 1,
                    text: 'Your redux seems to be working now.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 2,
                    text: 'Your setup might not be correct.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 3,
                    text: 'Welcome to typescript.',
                    createdOn: Date.now()
                } as Store.Notification
            ]
        };

        let store: redux.Store<Store.All> = redux.createStore(
            reducers,
            sampleState as Store.All
        );
        expect(store.getState()).toEqual(sampleState);
    });

    it('Dimisses notification', () => {
        let state0 = {
            notifications: [
                {
                    id: 1,
                    text: 'Your redux seems to be working now.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 2,
                    text: 'Your setup might not be correct.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 3,
                    text: 'Welcome to typescript.',
                    createdOn: Date.now()
                } as Store.Notification
            ]
        };
        let state1 = {
            notifications: [
                {
                    id: 1,
                    text: 'Your redux seems to be working now.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 3,
                    text: 'Welcome to typescript.',
                    createdOn: Date.now()
                } as Store.Notification
            ]
        };

        let store: redux.Store<Store.All> = redux.createStore(
            reducers,
            state0 as Store.All
        );

        store.subscribe(() => {
            expect(store.getState()).toEqual(state1);
        });

        store.dispatch(dismissNotification(2))
    });

    it('Dimisses notification', () => {
        let state0 = {
            notifications: [
                {
                    id: 1,
                    text: 'Your redux seems to be working now.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 2,
                    text: 'Your setup might not be correct.',
                    createdOn: Date.now()
                } as Store.Notification,
                {
                    id: 3,
                    text: 'Welcome to typescript.',
                    createdOn: Date.now()
                } as Store.Notification
            ]
        };
        let state1 = {
            notifications: [] as Store.Notification[]
        };

        let store: redux.Store<Store.All> = redux.createStore(
            reducers,
            state0 as Store.All
        );

        store.subscribe(() => {
            expect(store.getState()).toEqual(state1);
        });

        store.dispatch(clearNotifications())
    })
});