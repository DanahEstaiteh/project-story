import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { productData } from '../../Data/Data';
import Product from './Product';

export default {
  title: 'product',
  Component: Product
};

const Template: Story = () => <Product productData={productData} />;

export const ProductList = Template.bind({});
