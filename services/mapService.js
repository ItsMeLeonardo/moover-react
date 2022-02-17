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
