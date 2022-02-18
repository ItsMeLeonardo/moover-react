import { useNetworkState } from "./useNetworkState";
import { getDirections as getDirectionsService } from "../services/mapService";

export const useMapDirection = () => {
  const { meta, actions, data } = useNetworkState();
  const { isLoading, error } = meta;

  const getDirections = ({ from, to }) => {
    actions.startRequest();
    console.log({ from, to });

    getDirectionsService(from, to)
      .then(({ routes }) => {
        actions.setRequestData(routes);
        actions.endRequest();
      })
      .catch((err) => {
        actions.setErrorState(err.message);
        actions.endRequest();
      })
      .finally(() => actions.endRequest());
  };

  return { isLoading, error, getDirections, data };
};
