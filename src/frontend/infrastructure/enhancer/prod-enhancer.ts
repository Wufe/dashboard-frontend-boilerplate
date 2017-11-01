import { applyMiddleware, compose, Middleware } from 'redux';

export default (...middlewares: Middleware[]) => {
    return compose(
        applyMiddleware(...middlewares)
    );
};

