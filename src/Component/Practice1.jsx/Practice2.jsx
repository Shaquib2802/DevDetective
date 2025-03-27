import { useState, createContext, useEffect } from "react";
import Practice3 from "./Practice3";
import { Glob } from "../Services/Globe";

export const UserContext = createContext();
const Practice2 = () => {
  const [data, getData] = useState();

  const DataApi = async () => {
    const response = await Glob();
    console.log("API Response:", response?.products[0]?.brand);

    getData(response?.products[0]?.brand);
    
  };

  useEffect(() => {
    console.log("Calling API...");
    DataApi();
  }, []);

  return (
    <UserContext.Provider value={data}>
      <div>
        <h1>This is Component2 </h1>

        <Practice3 />
      </div>
    </UserContext.Provider>
  );
};


export default Practice2;
