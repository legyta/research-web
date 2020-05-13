import axios from "axios";

export default async function sliderHelper(values) {
  const response = await axios.post("response", values);
  return response;
}
