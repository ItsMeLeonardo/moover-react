import { useNetworkState } from "./useNetworkState";
import { findPlaces } from "../services/mapService";

export const useFindPlace = () => {
  const { meta, actions, data } = useNetworkState();
  const { error, isLoading } = meta;

  const findLocation = ({ keyword = "" } = {}) => {
    actions.startRequest();

    findPlaces(keyword)
      .then(({ features }) => {
        actions.setRequestData(features);
        actions.endRequest();
      })
      .catch((err) => {
        actions.setErrorState(err.message);
        actions.endRequest();
      })
      .finally(() => actions.endRequest());
  };

  return { isLoading, error, data, findLocation };
};
