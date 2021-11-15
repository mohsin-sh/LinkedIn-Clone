import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
 



