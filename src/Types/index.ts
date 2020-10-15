export interface Category {
    id: string;
    CategorieName: string;
    CreatedAt:  Date;
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
  }

  export interface CategoryTitle {
    id: string;
    title: string;
  }

  