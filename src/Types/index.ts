export interface Category {
    id: string;
    CategorieName: string;
    CreatedAt:  Date;
  }

  export interface product {
    code: string;
    name: string;
    category: string;
    productDescription: string;
    tax: number;
    price: number;
    img: string;
    rawPrice: number;
    quantity: number;
    expirationDate: Date;
  }

  