import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the intercepted data
interface ApiData {
  url: string;
  data: any;
  method: string;
}

// Define the context type
interface ContextType {
  apiData: ApiData[];
  addApiData: (newData: ApiData) => void;
}

// Create the context
const ApiContext = createContext<ContextType | undefined>(undefined);

// Provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [apiData, setApiData] = useState<ApiData[]>([]);

  const addApiData = (newData: ApiData) => {
    setApiData((prevData) => [...prevData, newData]);
  };

  return (
    <ApiContext.Provider value={{ apiData, addApiData }}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to use the context
export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within a ContextProvider');
  }
  return context;
};