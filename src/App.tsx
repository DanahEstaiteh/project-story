import React from 'react';
import './App.css';
import PosPage from './Components/PosPage/PosPage';
import Product from './Components/productData/Product';
import { productData } from './Data/Data';

function App() {
  return (
    <div className="App">
      {/*  <ProductDataList productData={productData} /> */}
      {/* <Product productData={data}/> */}
      <Product productData={productData} />
      {/*  <ProductForm initialValues={initialValues} initialErrors={initialErrors}  /> */}
      {/* <PosPage /> */}
    </div>
  );
}

export default App;
