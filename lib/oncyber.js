const axios = require('axios');
const {isAlphanumeric} = require('./utils');

export async function requestOncyberArtworksList(hash) {
  const baseURL = 'https://www.slkzgm.com/oncyber/';

  if (!hash) return ;
  if (!isAlphanumeric(hash)) return ;

  return (await axios.get(baseURL + hash)).data;
}
