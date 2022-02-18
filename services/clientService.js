import axios from "axios";

const clientApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/clients`,
});

export const getClientsByEmail = async (email) => {
  const res = await clientApi.get(`/${email}`);
  return res.data;
};
