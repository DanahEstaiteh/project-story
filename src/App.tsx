import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/index';
import PosHeader from './Components/PosHeader/PosHeader'
import CategoriesList from './Components/CategoriesList/CategoriesList';
import EditDialog from './Components/Dialog/EditDialog';
import Search from './Components/Search/Search';
import {Category, product} from '../src/Types/index';
import { categoryData,productData } from './Data/Data';
import ProductDataList from './Components/productData/productDataList';
import Product from './Components/productData/Product';
import FilterProductList from './Components/FilterProductList/FilterProductList';

function App() {
  //const [data, setData] = React.useState<Category[]>(categoryData);
  const [data, setData] = React.useState<product[]>(productData);
  return (
    <div className="App">
      
     {/*  <ProductDataList productData={productData} /> */}
     {/* <Product productData={data}/> */}
     <Product productData={data} />
    </div>
  );
  
}

export default App;
