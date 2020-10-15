import { productData } from "../../Data/Data";
import { product } from "../../Types";

export const updateProduct =(product : product) => {
 let productIndex = productData.findIndex(x => x.id === product.id);
 productData[productIndex] = {...product};
 return productData;
}

export const addNewProduct =(product : product) => {
    let newId = productData.length +1 ;
    product.id = newId;
    productData.push(product);
    return productData;
   }