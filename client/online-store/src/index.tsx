import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { onPatch } from 'mobx-state-tree';
import Fltrs from './mobX/State';


onPatch(Fltrs, patch => {
  console.log(patch)
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
