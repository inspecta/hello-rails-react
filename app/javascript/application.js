import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import store from './redux/store';

function App() {
  return (
    <Greetings />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
