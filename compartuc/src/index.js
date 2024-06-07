// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App2 from './App2.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Importa los estilos de MDB

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2/>
  </React.StrictMode>,
  document.getElementById('root')
);
