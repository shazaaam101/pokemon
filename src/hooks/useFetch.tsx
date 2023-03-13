import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const POKEMON_API_DEBOUNCE = useDebounce(url, 500);
  let isMount = true;
  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);

    setLoading(false);
    console.log(data);
    console.log(url);
    return data;
  };
  useEffect(() => {
    try {
      if (!isMount) getData();
    } catch (error) {
      setError(error);
      console.error("fetch error:", error);
    }

    return () => {
      isMount = false;
    };
  }, [POKEMON_API_DEBOUNCE]);

  return { data, loading, error, getData };
};

export default useFetch;
