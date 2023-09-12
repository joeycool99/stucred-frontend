// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import 'semantic-ui-css/semantic.min.css';


axios.defaults.baseURL = 'http://localhost:8080'; 

ReactDOM.render(<App />, document.getElementById('root'));
