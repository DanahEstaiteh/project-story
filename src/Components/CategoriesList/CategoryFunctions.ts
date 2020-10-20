import { Category } from '../../Types';

export const getCategoryName = (categoryData: Category[]) => {
  let count = 1;
  let titles = categoryData.map((category) => ({
    id: count++,
    title: category['categoryName']
  }));
  titles.unshift({ id: 0, title: 'home' });
  console.log(titles);
  return titles;
};
