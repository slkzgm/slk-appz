const axios = require('axios');

const baseURL = process.env.NEXT_PUBLIC_API_URL + 'forgingszn/';

export async function requestForgingSznAPI() {
  return (await axios.get(baseURL)).data;
}
