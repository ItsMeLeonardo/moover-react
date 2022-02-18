import { useNetworkState } from "./useNetworkState";

import { getClientsByEmail } from "../services/clientService";

export const useClients = () => {
  const { meta, actions, data } = useNetworkState();
  const { isLoading, error } = meta;

  const getClients = ({ email }) => {
    actions.startRequest();
    getClientsByEmail(email)
      .then((clients) => {
        actions.setRequestData(clients);
        actions.endRequest();
      })
      .catch((err) => {
        actions.setErrorState(err.message);
        actions.endRequest();
      })
      .finally(() => actions.endRequest());
  };

  return { isLoading, error, data, getClients };
};
