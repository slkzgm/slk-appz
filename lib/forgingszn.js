const axios = require('axios');

const baseURL = 'https://www.slkzgm.com/forgingszn/';

export async function requestForgingSznAPI() {
  return (await axios.get(baseURL)).data;
}
