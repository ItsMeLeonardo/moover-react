import axios from "axios";

/**
 * @description - Find client by email
 * @param {String} email a string representing the email of the client
 * @returns {Promise<Array>} a promise with an array of clients that match the email
 */
export const getClientsByEmail = async (email) => {
  const baseUrl = globalThis.location.origin;
  const res = await axios.get(`${baseUrl}/api/clients/${email}`);
  return res.data;
};
