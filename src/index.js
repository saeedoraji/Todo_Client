import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from "antd"
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render (
  <LocaleProvider>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
);

registerServiceWorker();
export {LocaleProvider}
