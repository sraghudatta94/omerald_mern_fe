import { useEffect, useState } from 'react';

export const useFetchByParam = (url, param) => {
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
            title: param,
          },
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
