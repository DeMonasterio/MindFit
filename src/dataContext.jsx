// src/context/DataContext.js
import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
const DataContext = createContext();

// Definir el proveedor del contexto
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Llamada a la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ubiquitous-space-orbit-x749j7jg7vw26rrj-5000.app.github.dev/api/post/get');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
