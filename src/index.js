import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/groups';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  // persistState(null, {
  //   key: 'starttab',
  // }),
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
