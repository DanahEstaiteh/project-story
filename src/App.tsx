import React, { useEffect, useState } from 'react';
import './App.css';
import { Cart, product, ProductItem } from '../src/Types/index';
import { cartData, categoryData, productData } from './Data/Data';
import Product from './Components/productData/Product';
import StockTabs from './Components/StockItems/StockTabs';
import { getCategoryName } from './Components/CategoriesList/CategoryFunctions';
import ProductItems from './Components/StockItems/ProductItems';
import { getProductItem } from './Components/productData/ProductFunction';
import StockItems from './Components/StockItems/StockItems';
import CartTab from './Components/CartItemsSection/CartTab';
import { setDate } from 'date-fns';
import CartItemsSection from './Components/CartItemsSection/CartItemsSection';
import CartFooter from './Components/CartItemsSection/CartSectionFooter';

function App() {
  const products: ProductItem[] = getProductItem('home');

  // const [data] = React.useState<product[]>(productData);
  //const categoryNames = getCategoryName(categoryData);

  return (
    <div className="App">
      {/*  <ProductDataList productData={productData} /> */}
      {/* <Product productData={data}/> */}
      {/*  <Product productData={data} /> */}
      {/*  <ProductForm initialValues={initialValues} initialErrors={initialErrors}  /> */}
      {/* <StockItems categoryNames={categoryNames} productsItem={products} /> */}
      <CartItemsSection cartList={cartData} />
    </div>
  );
}

export default App;
