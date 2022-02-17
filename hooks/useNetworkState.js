import { useState } from "react";

export const useNetworkState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const meta = { isLoading, error };
  const actions = {
    startRequest: () => setIsLoading(true),
    endRequest: () => setIsLoading(false),
    setErrorState: (message = "") => {
      setError({ message });
    },
    setRequestData: (res) => setData(res),
  };

  return { meta, actions, data };
};
