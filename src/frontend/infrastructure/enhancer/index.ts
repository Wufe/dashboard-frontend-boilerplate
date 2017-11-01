import Environment from 'frontend/environment';
import { applyMiddleware, compose } from 'redux';

const enhancer = Environment.isDevelopment() ?
    require('./dev-enhancer').default :
    require('./prod-enhancer').default;

export default enhancer;