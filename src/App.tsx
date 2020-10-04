import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/index';
import PosHeader from './Components/PosHeader/PosHeader'
import CategoriesList from './Components/CategoriesList/CategoriesList';

function App() {
  return (
    <div className="App">
      <CategoriesList />
    </div>
  );
}

export default App;
