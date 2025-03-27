import axios from "axios";

export const Glob = async (data) => {
  console.log("this isu8yyiriutfe9y9y49 service data1", data);
  try {
    const response = await axios.get("https://dummyjson.com/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data || [];
  } catch (e) {
    console.log(e);
  }
};
