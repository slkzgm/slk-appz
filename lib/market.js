const axios = require('axios');

const baseURL = 'http://slkzgm.com/ecosystemStats/';

export async function requestCollectionsStats() {
  return (await axios.get(baseURL)).data;
}
