import axios from "axios";

const token =
  "pk.eyJ1IjoiaXRzbWVsZW9uYXJkbyIsImEiOiJja3ZzcmpoMTU0czBtMm9tbHZhbTMzYTFrIn0.fgwmkMuUlIaqcnXtQjbWfQ";

const findPlaceApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    country: "pe",
    proximity: "-76.83509411327492,-11.971888298215333",
    types: ["place", "postcode", "address", "district"].join(","),
    access_token: token,
  },
});

/**
 * @description - Find place by name more info => https://docs.mapbox.com/playground/geocoding/
 * @param {String} keyword - a place name
 * @returns
 */
export const findPlaces = async (keyword = "lima") => {
  const res = await findPlaceApi.get(`/${keyword}.json`);
  return res.data;
};

/* ======= GET DIRECTION ====== */

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    steps: false,
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    access_token: token,
  },
});

/**
 *  @description - Get directions between two points more info => https://docs.mapbox.com/playground/directions/
 * @param {[number, number]} origin lng, lat
 * @param {[number, number]} destination lng, lat
 */
export const getDirections = async (origin, destination) => {
  const res = await directionsApi.get(
    `/${origin.join(",")};${destination.join(",")}`
  );
  return res.data;
};
