import { rootReducer } from 'frontend/infrastructure/redux/reducers';
import { State } from 'frontend/state';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import Environment from 'frontend/environment';
import Enhancer from 'frontend/infrastructure/enhancer';
import { rootEpic } from 'frontend/infrastructure/redux/epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

let storeInstance: Store<State>;

export const makeStore: (preloadedState?: State) => Store<State> =
    (preloadedState) => {
        storeInstance = createStore<State>(
            rootReducer,
            preloadedState,
            Enhancer(epicMiddleware)
        );
        return storeInstance;
    };

export const getStore: () => Store<State> =
    () => storeInstance || makeStore();