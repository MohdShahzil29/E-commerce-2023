import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api";

const useFetch = (endPoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetchApiData(endPoint);
      setData(res);
    };

    makeApiCall();
  }, [endPoint]);

  return { data };
};

export default useFetch;
