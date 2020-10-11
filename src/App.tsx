import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/index';
import PosHeader from './Components/PosHeader/PosHeader'
import CategoriesList from './Components/CategoriesList/CategoriesList';
import EditDialog from './Components/Dialog/EditDialog';
import Search from './Components/Search/Search';
import {Categorie} from '../src/Types/index';
export const Data : Categorie[]= [
  {
    id: "1",
    CategorieName: "red",
   
    CreatedAt: new Date(),
  },
  {
    id: "2",
    CategorieName: "PINK",
   
    CreatedAt: new Date(),
  },
  {
    id: "3",
    CategorieName: "ORANGE",
   
    CreatedAt: new Date(),
  },
  {
    id: "4",
    CategorieName: "GOLD",
   
    CreatedAt: new Date(),
  },
  {
    id: "5",
    CategorieName: "LAVENDER",
   
    CreatedAt: new Date(),
  },
  {
    id: "6",
    CategorieName: "SEAGREEN",
   
    CreatedAt: new Date(),
  },
  {
    id: "7",
    CategorieName: "OLIVE",
   
    CreatedAt: new Date(),
  },
  {
    id: "8",
    CategorieName: "black",
    CreatedAt: new Date(),
    
  },
  {
    id: "9",
    CategorieName: "yellow",
    CreatedAt: new Date(),
    
  },
  {
    id: "10",
    CategorieName: "TEAL",
    CreatedAt: new Date(),
    
  },
  {
    id: "11",
    CategorieName: "CYAN",
    CreatedAt: new Date(),
    
  },
  {
    id: "12",
    CategorieName: "TURQUOISE",
    CreatedAt: new Date(),
    
  },
  {
    id: "13",
    CategorieName: "BLUE",
    CreatedAt: new Date(),
    
  },
  {
    id: "14",
    CategorieName: "TAN",
    CreatedAt: new Date(),
    
  },
  {
    id: "15",
    CategorieName: "PERU",
    CreatedAt: new Date(),
    
  },
];

function App() {
  const [data, setData] = React.useState<Categorie[]>(Data);
  return (
    <div className="App">
       <CategoriesList categoryData={data} />  
      
    </div>
  );
  
}

export default App;
