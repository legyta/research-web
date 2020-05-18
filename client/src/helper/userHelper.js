import axios from "axios";

export default async function userHelper(sendingtoServer) {
  console.log(sendingtoServer);
  const response = await axios.post("users", sendingtoServer);
  const data = await response.data;
  console.log(response.data);
  return data;
}
