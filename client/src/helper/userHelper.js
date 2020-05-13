import axios from "axios";

export default async function userHelper(filledInfo) {
  const response = await axios.post("users", filledInfo);
  return response;
}
