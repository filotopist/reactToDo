import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {element} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  element,
  document.getElementById('root')
);
registerServiceWorker();
