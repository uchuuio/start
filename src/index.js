import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import persistState from 'redux-localstorage';

import 'normalize.css';
import { Provider as RebassProvider } from 'rebass';

import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  reducer,
  composeEnhancers(
    persistState(null, {
      key: 'starttab',
    })
  )
);

render(
  <Provider store={store}>
    <RebassProvider>
      <App />
    </RebassProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
