import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.scss';

// on désactive temporairement le StrictMode pour ne pas avoir les console.log
// en double (c'est un outil qui permet de détecter des bugs)

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
