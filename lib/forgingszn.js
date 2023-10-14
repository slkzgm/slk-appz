const axios = require('axios');

const baseURL = 'http://slkzgm.com/forgingszn/';

export async function requestForgingSznAPI() {
  return (await axios.get(baseURL)).data;
}
