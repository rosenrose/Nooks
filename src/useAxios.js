import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ loading: true, data: null, error: null });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (options.url) {
      axiosInstance(options)
        .then((data) => {
          setState({ ...state, loading: false, data });
        })
        .catch((error) => {
          setState({ ...state, loading: false, error });
        });
    }
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
