import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview/CategoriesPreview.component";
import Category from "../category/Category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
