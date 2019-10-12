/* istanbul ignore file */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ReduxStore } from './Store';

ReactDOM.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
