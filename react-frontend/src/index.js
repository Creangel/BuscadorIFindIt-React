import React from 'react';
import ReactDOM from 'react-dom/client';
import './basicStyle.css';
import reportWebVitals from './reportWebVitals';
import { FinderApp } from './FinderApp';
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";

// Make jQuery available globally
window.$ = window.jQuery = $;

ReactDOM.createRoot(document.getElementById('SearchIFindIt')).render(
  <React.StrictMode>
      <FinderApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
