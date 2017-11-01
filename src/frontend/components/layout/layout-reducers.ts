import { Reducer, AnyAction } from 'redux';
import { State } from 'frontend/state';
import { MAKE_ALERT } from 'frontend/components/layout/layout-types';

export const alertReducer: Reducer<State> = (state: State, action: AnyAction) => {
    switch(action.type){
        case MAKE_ALERT:
            alert(action.payload);
    }
    return state;
}