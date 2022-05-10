import { useEffect, useState } from 'react';

export const usePost = (url, bodyObject) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      try {
        const resp = await fetch(url, {
          headers: {
            Content_Type: 'application.json',
            },
           body: bodyObject
        });
        const data = await resp.json();

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};
