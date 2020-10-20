export interface Category {
  id: string;
  categoryName: string;
  createdAt: Date;
}
export interface Errors {
  name: string;
  rawPrice: string;
  code: string;
  category: string;
  expirationDate: string;
  price: string;
  count: string;
}

export interface product {
  id: number;
  code: string;
  name: string;
  category: string;
  productDescription: string;
  tax: number;
  price: number;
  img: string;
  rawPrice: number;
  count: number;
  expirationDate: Date;
  color: string;
}

export interface CategoryTitle {
  id: number;
  title: string;
}

export interface ProductItem {
  name: string;
  color: string;
  price: number;
  count: number;
  categoryName: string;
  img: string;
}

export interface Cart {
  id: number;
  time: Date;
}

export interface Item {
  cartId: number;
  name: string;
  price: number;
  count: number;
  total: number;
}
