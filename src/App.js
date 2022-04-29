import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import EmployeeRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename='/employee'
      >
        <EmployeeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
