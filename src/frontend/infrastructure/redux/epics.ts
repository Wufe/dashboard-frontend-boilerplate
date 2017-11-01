import { combineEpics, Epic } from 'redux-observable';
import { Store } from 'redux';
import { State } from 'frontend/state';
import 'rxjs';
import { MENU_CLICKED } from 'frontend/components/menu';
import { makeAlert } from 'frontend/components/layout/layout-actions';

const pingEpic: Epic<any, Store<State>> = action$ => 
    action$.ofType(MENU_CLICKED)
        .mapTo(makeAlert("test"));

export const rootEpic = combineEpics(
    pingEpic
);