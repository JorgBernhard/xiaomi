import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Celulares from './Pages/Celulares/Celulares';
import Contato from './Pages/Contato/Contato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Celulares />
    <Contato />
  </React.StrictMode>
);
