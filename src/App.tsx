import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import FooterPage from './modules/FooterPage';
import HeaderPage from './modules/HeaderPage';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  );
}

export default App;
