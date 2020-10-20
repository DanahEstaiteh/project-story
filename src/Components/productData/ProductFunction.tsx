import { productData } from '../../Data/Data';
import { Category, CategoryTitle, product } from '../../Types';

export const updateProduct = (product: product) => {
  let productIndex = productData.findIndex((x) => x.id === product.id);
  productData[productIndex] = { ...product };
  return productData;
};

export const addNewProduct = (product: product) => {
  let newId = productData.length + 1;
  product.id = newId;
  productData.push(product);
  console.log({ productData });
  return productData;
};
const productItems = productData.map((item: product) => ({
  name: item.name,
  price: item.price,
  color: item.color ? item.color : '',
  count: item.count,
  img: item.img ? item.img : '',
  categoryName: item.category
}));

export const getProductItem = (categoryName: string | undefined) => {
  if (categoryName === 'home' || categoryName === undefined) {
    return productItems;
  } else {
    let newItem = productItems.filter(
      (item) => item.categoryName === categoryName
    );
    return newItem;
  }
};
