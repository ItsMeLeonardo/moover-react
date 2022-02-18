import axios from "axios";

const findPlaceApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    country: "pe",
    proximity: "-76.83509411327492,-11.971888298215333",
    types: ["place", "postcode", "address", "district"].join(","),
    access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
});

export const findPlaces = async (keyword = "lima") => {
  const res = await findPlaceApi.get(`/${keyword}.json`);
  return res.data;
};

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    steps: false,
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
});

/**
 *
 * @param {[number, number]} origin lng, lat
 * @param {[number, number]} destination lng, lat
 */
export const getDirections = async (origin, destination) => {
  const res = await directionsApi.get(
    `/${origin.join(",")};${destination.join(",")}`
  );
  return res.data;
};
