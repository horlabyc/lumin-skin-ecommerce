import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Routes/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
