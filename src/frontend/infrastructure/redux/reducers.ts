import { Reducer, combineReducers } from 'redux';
import { menuReducer } from 'frontend/components/menu';
// import reduceReducers from 'reduce-reducers';
import { State } from 'frontend/state';
import { alertReducer } from 'frontend/components/layout/layout-reducers';

const reduceReducers = require('reduce-reducers');

type GenericObject<T> = {
    [P in keyof T]: T[P];
};

type ElementType<T, K extends keyof T> = T[K];

export const apply: <T>(
    obj: GenericObject<T>,
    callback: (key: string, element: ElementType<T, keyof T>) => ElementType<T, keyof T>
) => T =
    (obj, callback) => {
        let copy = Object.assign({}, obj);
        for(let key in copy){
            copy[key] = callback(key, copy[key]);
        }
        return copy;
    };

export const rootReducer: Reducer<State> = reduceReducers(
    combineReducers({
        menu: menuReducer
    }),
    alertReducer
);