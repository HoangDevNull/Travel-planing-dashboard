import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

import rootSaga from './rootSaga';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

// setup redux store and apply redux saga. also add redux dev tool
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(sagaMiddleware, routerMiddleware(history)),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
