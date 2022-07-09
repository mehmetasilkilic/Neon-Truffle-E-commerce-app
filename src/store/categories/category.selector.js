export const selectCategoriesMap = (state) =>
  state.categories.categoriesArray.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
