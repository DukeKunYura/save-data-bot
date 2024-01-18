import axios from "axios";

export const getAnswer = async () => {
  const response = await axios
    .get("https://yesno.wtf/api")
    .catch((err) => console.log("Errrr"));
  return response?.data?.image || "нет подключения";
};
