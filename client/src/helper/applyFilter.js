import data from "../helper/articles.json";
const applyFilter = (category) => {
  let filteredList = data.articles.filter((item) => item.genre === category);
  if (category === "") return data.articles;
  return filteredList;
};
export default applyFilter;
