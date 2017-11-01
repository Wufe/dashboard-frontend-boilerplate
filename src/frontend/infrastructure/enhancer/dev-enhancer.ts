import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, compose, Middleware } from 'redux';
import immutable from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

export default (...middlewares: Middleware[]) => {
    return composeWithDevTools({

    })(
        applyMiddleware(immutable(), logger, ...middlewares)
    );
};