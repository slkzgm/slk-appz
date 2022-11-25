const axios = require('axios');

const baseURL = 'https://www.slkzgm.com/ecosystemStats/';

export async function requestCollectionsStats() {
  return (await axios.get(baseURL)).data;
}
