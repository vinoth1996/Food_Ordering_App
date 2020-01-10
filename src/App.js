import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Cards />
    </div>
  );
}

export default App;
