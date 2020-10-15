import { Category } from "../../Types";

export const getCategoryName = (categoryData:Category[]) => {
  return categoryData.map((category) => (
   {
     id: category["CategorieName"],
     title: category["CategorieName"]
   }
  ));
}