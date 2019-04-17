import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer,  compose(
    applyMiddleware(epicMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
epicMiddleware.run(rootEpic);

const appWithProvider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));