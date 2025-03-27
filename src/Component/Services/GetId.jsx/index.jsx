import axios from "axios";

export const Get_ID = async (data) => {
  console.log("this isu8yyiriutfe9y9y49 service data1", data);
  try {
    const response = await axios.get(`https://api.github.com/users/${data}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
