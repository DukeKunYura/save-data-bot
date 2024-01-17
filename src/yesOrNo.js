import axios from "axios";

export const getAnswer = async () => {
  const response = await axios.get("https://yesno.wtf/api");
  return response?.data?.image;
};
