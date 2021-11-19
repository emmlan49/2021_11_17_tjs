import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './App/App';
import store  from "./App/store/store";
import { BrowserRouter as Router} from 'react-router-dom'

//import reportWebVitals from './reportWebVitals';
// formateur : 06 64 27 63 60

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
