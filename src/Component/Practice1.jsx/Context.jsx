import React, { useEffect, useState } from 'react'
import { Glob } from '../Services/Globe';

const Context = () => {
     const [data, getData] = useState();
    
    
      const DataApi = async () => {
        const response = await Glob();
        console.log("API Response:", response);
        getData(response?.data);
      };
   
    
      useEffect(() => {
        console.log("Calling API...");
        DataApi();
      }, []);
    
  return (
    <div>Context</div>
  )
}

export default Context