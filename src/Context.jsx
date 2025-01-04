import React, { createContext, useState } from "react";

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [center, setCenter] = useState([37.40599, -122.078514]);

  return (
    <MyContext.Provider value={{ center, setCenter }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
