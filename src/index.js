import React  from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  var WebFont = require('webfontloader');

WebFont.load({
    custom: {
      families: ['Montserrat:n1,n2,n3,n4,n5,n6,n7,n8,n9'],
      urls: ['font/fonts.css']
    }
  });
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
