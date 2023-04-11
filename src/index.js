import React from 'react';
import './index.css';
import App from './App';
import { hydrate, render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

 
reportWebVitals();
