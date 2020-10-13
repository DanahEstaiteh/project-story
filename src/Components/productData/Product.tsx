import React, { useEffect, useState } from 'react'
import { product } from '../../Types';
import Search from '../Search/Search';
import HeaderList from './HeaderList'
import ProductDataList from './productDataList';

interface ProductProps{
    productData: product[];  
}


const Product:React.FC<ProductProps> = (props) => {
    const { productData } = props;
    const [data, setData] = useState<product[]>(productData);
    const productTitle: string[] = ["Code", "Name", "Category","Product Description", "Tax(%)", "Price","Actions"];
    useEffect(() => {
      setData(data);
    }, [data]);
    

    return (
        <>
        <Search Data={data}
          onSearch={(data) => setData(data)}
          allData={productData}
          multiProp={true}
          />
         <HeaderList productTitle={productTitle} productData={data}  onSort={(data) => setData(data)}/> 
         <ProductDataList productData={data}/>  
        </>
    )
}


export default Product;