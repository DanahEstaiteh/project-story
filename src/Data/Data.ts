import { Category, product } from "../Types";


export const categoryData: Category[] = [
  {
    id: "1",
    CategorieName: "red",

    CreatedAt: new Date(),
  },
  {
    id: "2",
    CategorieName: "PINK",

    CreatedAt: new Date(),
  },
  {
    id: "3",
    CategorieName: "ORANGE",

    CreatedAt: new Date(),
  },
  {
    id: "4",
    CategorieName: "GOLD",

    CreatedAt: new Date(),
  },
  {
    id: "5",
    CategorieName: "LAVENDER",

    CreatedAt: new Date(),
  },
  {
    id: "6",
    CategorieName: "SEAGREEN",

    CreatedAt: new Date(),
  },
  {
    id: "7",
    CategorieName: "OLIVE",

    CreatedAt: new Date(),
  },
  {
    id: "8",
    CategorieName: "black",
    CreatedAt: new Date(),
  },
  {
    id: "9",
    CategorieName: "yellow",
    CreatedAt: new Date(),
  },
  {
    id: "10",
    CategorieName: "TEAL",
    CreatedAt: new Date(),
  },
  {
    id: "11",
    CategorieName: "CYAN",
    CreatedAt: new Date(),
  },
  {
    id: "12",
    CategorieName: "TURQUOISE",
    CreatedAt: new Date(),
  },
  {
    id: "13",
    CategorieName: "BLUE",
    CreatedAt: new Date(),
  },
  {
    id: "14",
    CategorieName: "TAN",
    CreatedAt: new Date(),
  },
  {
    id: "15",
    CategorieName: "PERU",
    CreatedAt: new Date(),
  },
];

export const productData: product[] = [
  {
    code: "product1",
    name: "lipstick",
    category: "pink",
    productDescription: "mac",
    tax: 12,
    price: 15.5,
    img: "../images/lipstick.jpg",
    rawPrice: 12,
    quantity: 30,
    expirationDate: new Date("2021-01-16"),
  },
  {
    code: "product2",
    name: "blush",
    category: "brown",
    productDescription: "sephora",
    tax:2,
    price: 3.5,
    img: "../images/blush.jpg",
    rawPrice: 1.8,
    quantity: 18,
    expirationDate: new Date("2020-11-16"),
  },
  {
    code: "product3",
    name: "foundation",
    category: "light",
    productDescription: "chanel",
    tax: 8,
    price: 40,
    img: "../images/foundation.jpg",
    rawPrice: 32,
    quantity: 55,
    expirationDate: new Date("2022-03-16"),
  },
  {
    code: "product4",
    name: "powder",
    category: "white",
    productDescription: "lancome",
    tax: 6,
    price: 33.6,
    img: "../images/powder.jpg",
    rawPrice: 28,
    quantity: 5,
    expirationDate: new Date("2020-12-16"),
  },
  {
    code: "product5",
    name: "highlighter",
    category: "bronze",
    productDescription: "ofra",
    tax: 10,
    price: 40.5,
    img: "../images/highlight.jpg",
    rawPrice: 36,
    quantity: 15,
    expirationDate: new Date("2020-11-25"),
  },
  
];
