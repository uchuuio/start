import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  let div = document.createElement('div');
  div.id = 'root';

  ReactDOM.render(<App />, div);
});
