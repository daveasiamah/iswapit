import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Make a request to the API Server
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
};

export default useApi;
