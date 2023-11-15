import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Ddubi from './ddubi';
//import Hello from './Hello';
//import ExampleJsx from './ExampleJsx';
//import ExampleComponent from './ExampleComponent';
//import ExampleEvent from './ExampleEvent';
import ExampleRendering from './ExampleRendering';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App /><Ddubi />*/}
     {/* <Hello /> */}
     {/* <ExampleJsx /> */}
     {/* <ExampleComponent /> */}
     {/* { <ExampleEvent /> } */}
     <ExampleRendering />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
