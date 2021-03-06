import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import CategoriesList from './CategoriesList';
import { categoryData } from '../../Data/Data';

export default {
  title: 'Category',
  Component: CategoriesList
};

const Template: Story = () => <CategoriesList categoryData={categoryData} />;

export const CategoryList = Template.bind({});
