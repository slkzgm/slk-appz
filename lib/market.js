const axios = require('axios');

const baseURL = process.env.NEXT_PUBLIC_API_URL + 'ecosystemStats/';

export async function requestCollectionsStats() {
  return (await axios.get(baseURL)).data;
}
