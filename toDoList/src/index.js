import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare,faEdit,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import App from './App';
library.add(faB,faCheckSquare,faEdit,faTrashCan)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
