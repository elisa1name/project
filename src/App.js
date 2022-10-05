import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from '../src/components/AppRouter';
import './App.css';


function App() {
  return (
        <BrowserRouter>
              <AppRouter></AppRouter>
       </BrowserRouter>
  );
}

export default App;
