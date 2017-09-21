import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import persistState from 'redux-localstorage';
import reducer from './reducers/groups';

import 'normalize.css';
import { Provider as RebassProvider } from 'rebass';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  persistState(null, {
    key: 'starttab',
  }),
));

render(
  <Provider store={store}>
    <RebassProvider>
      <App />
    </RebassProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
