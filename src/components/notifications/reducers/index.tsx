import { combineReducers } from 'redux';
import {
    Action,
    DISMISS_NOTIFICATION,
    CLEAR_NOTIFICATIONS
} from '../actions';

export namespace Store {
    export interface Notification {
        id: number;
        text: string;
        createdOn: number;
    };

    export interface All {
        notifications: Notification[]
    };
}

function notifications(state: Store.Notification[] = [], action: Action): Store.Notification[] {
    switch (action.type) {
        case DISMISS_NOTIFICATION:
            let notificationsNew = state.filter((notification) => {
                return notification.id !== action.id;
            });
            return notificationsNew;
        case CLEAR_NOTIFICATIONS:
            return [];

        default: return state;
    }
}

export const reducers = combineReducers<Store.All>({
    notifications
});