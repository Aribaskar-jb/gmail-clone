// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import data from "../component/data.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Data, setData] = useState(data);


  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
