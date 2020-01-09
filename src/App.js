import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import Cards from './components/cards';

function App() {
  return (
    <div>
      <NavigationBar />
      <br />
      <Cards />
    </div>
  );
}

export default App;
