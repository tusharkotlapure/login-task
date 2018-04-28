import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const PRODUCTION = 'production';

const devMiddleware = process.env.NODE_ENV !== PRODUCTION ? [logger] : [];

const middleware = [thunk, ...devMiddleware];

const composeEnhancers = composeWithDevTools({
    shouldHotReload: false,
});

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
