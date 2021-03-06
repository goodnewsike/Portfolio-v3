import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.scss';
// import {ThemeProvider} from './_theme/';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         {/* <ThemeProvider> */}
         <App />
         {/* </ThemeProvider> */}
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
