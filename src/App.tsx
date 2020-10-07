import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/index';
import PosHeader from './Components/PosHeader/PosHeader'
import CategoriesList from './Components/CategoriesList/CategoriesList';

export const Data = [
  {
    id: "1",
    CategorieName: "red",
   
    CreatedAt: "22-12-2020-12",
  },
  {
    id: "2",
    CategorieName: "green",
   
    CreatedAt: "22-12-2020-09",
  },
  {
    id: "3",
    CategorieName: "black",
    CreatedAt: "22-12-2020-11",
    
  },
  {
    id: "4",
    CategorieName: "yellow",
    CreatedAt: "22-12-2020-10",
    
  },
];

function App() {
  return (
    <div className="App">
      <CategoriesList Categories={Data}/>
    </div>
  );
}

export default App;
