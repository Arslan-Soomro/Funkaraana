import { CategoryElementProps } from "./customTypes";

export const categoryNames = [
  { name: "Paintings" },
  { name: "Statues" },
  { name: "Drawings" },
];

export const colorFilters = [
  { name: "Red" },
  { name: "Green" },
  { name: "Blue" },
];

export const sizeFilters = [
  { name: "Small" },
  { name: "Medium" },
  { name: "Large" },
];

export const menuOptions = [
  { name: "Most Popular" },
  { name: "Best Rating" },
  { name: "Newest" },
  { name: "Price: Low to High" },
  { name: "Price: High to Low" },
];

export const categoryData: CategoryElementProps = {
  title: "New Arrivals",
  categories: categoryNames,
  filters: [
    {
      title: "Color",
      subFilters: colorFilters,
    },
    {
      title: "Frame Size",
      subFilters: sizeFilters,
    },
  ],
  menu: {
    title: "Sort",
    options: menuOptions,
  },
};
