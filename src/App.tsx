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
import ProductForm from './Components/ProductForm/ProductForm';

function App() {
  //const [data, setData] = React.useState<Category[]>(categoryData);
  const [data, setData] = React.useState<product[]>(productData);
  const initialErrors = {
    name: "",
   rawPrice:  "",
   code:  "",
   category:  "",
   expirationDate:  "",
   price:  "",
   count:  "",
  }
  const initialValues={
    code: "",
    name: "",
    category: "",
    productDescription: "",
    tax: 12,
    price: 12,
    img: "",
    rawPrice: 12,
    count: 12,
    expirationDate: new Date,
  }
  return (
    <div className="App">
      
     {/*  <ProductDataList productData={productData} /> */}
     {/* <Product productData={data}/> */}
      <Product productData={data} /> 
    {/*  <ProductForm initialValues={initialValues} initialErrors={initialErrors}  /> */}
    </div>
  );
  
}

export default App;
