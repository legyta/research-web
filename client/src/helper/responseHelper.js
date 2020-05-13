import axios from "axios";

export default async function sliderHelper(id, values) {
  values.article_id = id;
  const response = await axios.post("response", values, {
    headers: { selectedArticleReducer: id },
  });
  return response;
}
