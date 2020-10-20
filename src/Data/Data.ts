import { Cart, Category, CategoryTitle, Item, product } from '../Types';

export const categoryData: Category[] = [
  {
    id: '1',
    categoryName: 'Drinks',

    createdAt: new Date()
  },
  {
    id: '2',
    categoryName: 'Dinner',

    createdAt: new Date()
  },
  {
    id: '3',
    categoryName: 'Sweet',

    createdAt: new Date()
  }
];

export const productData: product[] = [
  {
    id: 1,
    code: 'product1',
    name: 'Hot Chocolate',
    category: 'Drinks',
    productDescription: 'hot',
    tax: 12,
    price: 15.5,
    img: '../images/hotChocolate.jpg',
    rawPrice: 12,
    count: 30,
    expirationDate: new Date('2021-01-16'),
    color: ''
  },
  {
    id: 2,
    code: 'product2',
    name: 'Tea',
    category: 'Drinks',
    productDescription: 'hot',
    tax: 2,
    price: 3.5,
    img: '',
    rawPrice: 1.8,
    count: 18,
    expirationDate: new Date('2020-11-16'),
    color: '#aa2e25'
  },
  {
    id: 3,
    code: 'product3',
    name: 'Coffee',
    category: 'Drinks',
    productDescription: 'hot',
    tax: 8,
    price: 40,
    img: '../images/coffee.jpg',
    rawPrice: 32,
    count: 55,
    expirationDate: new Date('2022-03-16'),
    color: 'brown'
  },
  {
    id: 4,
    code: 'product4',
    name: 'Soda',
    category: 'Drinks',
    productDescription: 'cold',
    tax: 6,
    price: 33.6,
    img: '',
    rawPrice: 28,
    count: 5,
    expirationDate: new Date('2020-12-16'),
    color: '#bbdefb'
  },
  {
    id: 5,
    code: 'product5',
    name: 'Milkshake',
    category: 'Drinks',
    productDescription: 'cold',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: 'pink'
  },
  {
    id: 5,
    code: 'product6',
    name: 'Lemonada',
    category: 'Drinks',
    productDescription: 'cold',
    tax: 10,
    price: 40.5,
    img: '../images/Lemonada.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-05'),
    color: ''
  },
  {
    id: 5,
    code: 'product7',
    name: 'Coca',
    category: 'Drinks',
    productDescription: 'cold',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product8',
    name: 'PanCake',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product9',
    name: 'Doughnuts',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product10',
    name: 'CheeseCake',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '.../images/Cheesecake.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product11',
    name: 'Brownies',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#3e2723'
  },
  {
    id: 5,
    code: 'product12',
    name: 'Cinnabon',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '../images/cinnabon.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product13',
    name: 'Cokkie',
    category: 'Sweet',
    productDescription: 'yummy',
    tax: 10,
    price: 40.5,
    img: '../images/cookie.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product14',
    name: 'Hamburger',
    category: 'Dinner',
    productDescription: 'mmmm!',
    tax: 10,
    price: 40.5,
    img: '../images/hamburger.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product15',
    name: 'Lasagna',
    category: 'Dinners',
    productDescription: 'mmmmm!',
    tax: 10,
    price: 40.5,
    img: '../images/lasagna.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product16',
    name: 'Chinese Chicken',
    category: 'Dinner',
    productDescription: 'mmmm !',
    tax: 10,
    price: 40.5,
    img: '.../images/chineseChicken.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product17',
    name: 'Turkish Pide',
    category: 'Dinner',
    productDescription: 'mmmm!',
    tax: 10,
    price: 40.5,
    img: '../images/turkisPide.jpg',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#6d4c41'
  },
  {
    id: 5,
    code: 'product18',
    name: 'Steak',
    category: 'Dinners',
    productDescription: 'mmmm =)',
    tax: 10,
    price: 40.5,
    img: '',
    rawPrice: 36,
    count: 15,
    expirationDate: new Date('2020-11-25'),
    color: '#ef9a9a'
  }
];
export const categoryTitle: CategoryTitle[] = [
  { id: 0, title: 'CategoryName' },
  { id: 1, title: 'Created At' }
];

export const cartData: Cart[] = [{ id: 2, time: new Date() }];

export const itemData: Item[] = [
  { cartId: 2, name: 'coffe', price: 10, count: 1 },
  { cartId: 2, name: 'Lemonada', price: 8, count: 1 }
];
